import { execSync } from "child_process";
import { Version, getVersions, splitVersion } from "./fetchVersion";
import * as fs from "fs-extra";
import path = require("path");
import { generateDtsBundle } from "dts-bundle-generator";
import { PackageJson } from "@npm/types";
import { setupTypedoc } from "./typedoc";

/**
 * @deprecated
 */
export interface PackageMetadata {
  name: string;
  version: string;
  npmVersion: string;
};

/**
 * Installs all Script API native modules.
 */
export async function installModule(module_name: string, version: Version) {  
  const versions = await getVersions(version, module_name);

  for (const npm_version of versions) {
    // Install npm package, saving as peer dependencies to avoid conflicts.
    console.log(`Installing ${module_name}@${npm_version}`);
    execSync(`npm i ${module_name}@${npm_version} --save-peer --save-exact`);
    const { moduleVersion } = splitVersion(npm_version, "minecraft");

    // Copy the node module index.d.ts file into the lib directory.
    // For example if path is node_modules/@minecraft/server/index.d.ts, the file will be copied to lib/{version}/@minecraft/server@{moduleVersion}.d.ts without the use of exec.
    // But first, create directory on lib if haven't.
    const module_path = `lib/${version}/${module_name}@${moduleVersion}`;
    if (!fs.existsSync(module_path)) fs.mkdirSync(module_path, { recursive: true });
    fs.copyFileSync(`node_modules/${module_name}/index.d.ts`, module_path + `/index.d.ts`);

    // Fetch depednencies
    setupTypedoc(module_name, moduleVersion, npm_version, module_path);

    // Uninstall module
    execSync(`npm un ${module_name}`);
  };
}

/**
 * Install external NPM packages such as `@minecraft/vanilla-data`
 * @param module_name 
 * @param version 
 */
export async function installBundle(module_name: string, version: Version) {  
  const isPreview = version.split(".").length === 4;
  // If it's preview, format version from '0.0.0.0' to '0.0.0-preview.0', otherwise keep it same
  const module_version = isPreview ? version.replace(/\.(\d+)$/, '-preview.$1') : version;

  // Install npm package, saving as peer dependencies to avoid conflicts.
  console.log(`Installing ${module_name}@${module_version}`);
  execSync(`npm i ${module_name}@${module_version} --save-peer --save-exact`);

  // Copy the node module index.d.ts file into the lib directory.
  // For example if path is node_modules/@minecraft/server/index.d.ts, the file will be copied to lib/{version}/@minecraft/server@{moduleVersion}.d.ts without the use of exec.
  // But first, create directory on lib if haven't.
  const module_path = `lib/${version}/` + module_name;
  const dirname = path.dirname(module_path);
  if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true });
  fs.copySync(`node_modules/${module_name}`, module_path);

  const { types } = fs.readJSONSync(`./node_modules/${module_name}/package.json`) as PackageJson;
  const [ bundledTypes ] = generateDtsBundle([{
    filePath: path.resolve(module_path, types),
    output: { noBanner: true },
  }]);
  const distPath = `${module_path}@${module_version}`;
  fs.mkdirSync(distPath, { recursive: true });
  fs.writeFileSync(`${distPath}/index.d.ts`, bundledTypes);
  setupTypedoc(module_name, module_version, module_version, distPath);

  // Uninstall module
  execSync(`npm un ${module_name}`);
  fs.rmSync(module_path, { recursive: true });
}
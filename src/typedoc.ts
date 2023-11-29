import { PackageJson } from "@npm/types";
import * as fs from "fs-extra";
import path = require("path");
import { Application, TSConfigReader, TypeDocOptions, TypeDocReader } from "typedoc";
import { Version, splitVersion } from "./fetchVersion";
import assert = require("assert");

export type LatestChannel = "preview" | "latest" | null;
 
export async function renderHtml (entryPoints: string[], version: string, channel: LatestChannel) {
  const options: Partial<TypeDocOptions> = {
    entryPoints,
    entryPointStrategy: "packages",
    skipErrorChecking: true,
    disableSources: false,
    basePath: "./lib/" + version,
    logLevel: "Info",
    excludeInternal: true,
    cleanOutputDir: true,
    includeVersion: false,
    name: "Script API - v" + version,
    readme: "README.md",
    githubPages: true
  };

  // Make an application to execute typedoc
  const app = await Application.bootstrap(options);

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());
  
  const project = await app.convert();
  // generate docs
  await app.generateDocs(project, "./docs/.vuepress/dist/" + (channel ?? version));
  // create a copy of the docs folder, but folder name with version for backwards compability
  if (channel) {
    fs.copySync("./docs/.vuepress/dist/" + channel, "./docs/.vuepress/dist/" + version);
  }
};

/**
 * This function must be called before uninstalling the module.
 */
export function setupTypedoc (module_name: string, module_version: string, npm_version: string, module_path: string, minecraft_version: Version, packageInfo: PackageJson) {
  const typedocJson: Partial<TypeDocOptions> = {
    basePath: "../../",
    entryPoints: ["./index.d.ts"],
    tsconfig: "./tsconfig.json",
    readme: "README.md"
  };
  const tsconfig = {
    compilerOptions: {
      module: "commonjs",
      lib: ["es6"],
      target: "es6",
      noEmit: true,
      typeRoots: [],
      types: [],
      paths: {}
    },
    files: ["index.d.ts"]
  };
  const dummyPackage: PackageJson = {
    name: module_name + "@" + module_version,
    version: module_version
  };
  let readmeText = [`### Dependencies`];
  
  assert(packageInfo.version === npm_version, new Error(`Package.json version is not the same as NPM version: ${packageInfo.version} != ${npm_version}`));

  // script module dependencies
  for (const dependencyName in packageInfo.dependencies) {
    let moduleVersion: string;
    const dependencyVersion = packageInfo.dependencies[dependencyName].replace(/\^|\~/, "");

    if (dependencyName === "@minecraft/common") {
      // This code has to be added until Mojang fixes their stupid dependency issues with @minecraft/common module
      // Always use the latest version of @minecraft/common
      const scriptModules = fs.readdirSync("./lib/" + minecraft_version + "/@minecraft");
      const latestCommonModule = scriptModules.reverse().find(v => v.startsWith("common"));
      moduleVersion = latestCommonModule.replace('common@', '');
    }
    else {
      moduleVersion = splitVersion(dependencyVersion, "minecraft").moduleVersion;
    }

    tsconfig.compilerOptions.paths[dependencyName] = [`../../${dependencyName}@${moduleVersion}/index.d.ts`];
    readmeText.push(`- <p>${dependencyName}@${moduleVersion}</p>`, `\`\`\`json
{
  "module_name": "${dependencyName}",
  "version": "${moduleVersion}"
}
\`\`\``);
  }

  // write
  fs.writeJSONSync(path.resolve(module_path, "typedoc.json"), typedocJson);
  fs.writeJSONSync(path.resolve(module_path, "tsconfig.json"), tsconfig);
  fs.writeJSONSync(path.resolve(module_path, "package.json"), dummyPackage);
  fs.writeFileSync(path.resolve(module_path, "README.md"), readmeText.length > 1 ? readmeText.join('\n') : "");
};
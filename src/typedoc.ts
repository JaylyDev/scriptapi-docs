import { PackageJson } from "@npm/types";
import * as fs from "fs-extra";
import path = require("path");
import { Application, TSConfigReader, TypeDocOptions, TypeDocReader } from "typedoc";
import { splitVersion } from "./fetchVersion";
import assert = require("assert");

/**
 * @param {string} dir
 * @returns {IterableIterator<string>}
 */
function* getFiles(dir: string): IterableIterator<string> {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res.replace(process.cwd(), ".").replace(/\\/g, "/");
    }
  }
}

async function renderHtml (entryPoints: string[], version: string) {
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
  const app = new Application();

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());
  
  app.bootstrap(options);
  
  const project = app.convert();
  await app.generateDocs(project, "./docs/.vuepress/dist/" + version);
};

/**
 * Generate typedoc documentation for a specific version.
 * @param version 
 */
export async function generateDocs (version: string) {
  const entryPoints = [...getFiles("./lib/" + version)].filter((file) => file.endsWith(".d.ts") && !file.includes("internal")).map(v => path.dirname(v));

  console.log("entryPoints", entryPoints);
  console.log("version", version);

  await renderHtml(entryPoints, version);
}

/**
 * This function must be called before uninstalling the module.
 */
export function setupTypedoc (module_name: string, module_version: string, npm_version: string, module_path: string) {
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
  
  const packageInfo = fs.readJSONSync(`./node_modules/${module_name}/package.json`) as PackageJson;
  assert(packageInfo.version === npm_version, new Error(`Package.json version is not the same as NPM version: ${packageInfo.version} != ${npm_version}`));

  // script module dependencies
  for (const dependencyName in packageInfo.dependencies) {
    const depednencyVersion = packageInfo.dependencies[dependencyName].replace(/\^|\~/, "");
    const { moduleVersion } = splitVersion(depednencyVersion, "minecraft");
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
import * as fs from "fs-extra";
import path = require("path");
import { Application, TSConfigReader, TypeDocOptions, TypeDocReader } from "typedoc";

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

const scriptModules = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-net",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
];

/**
 * Generate typedoc documentation for a specific version.
 * @param version 
 */
export async function generateDocs (version: string) {
  const entryPoints = 
    [...getFiles("./lib")]
      .filter(
        (file) =>
          file.startsWith(`./lib/${version}/@minecraft`) &&
          file.endsWith(".d.ts") &&
          !file.includes("internal")
      );

  // Get latest beta version of @minecraft/server by parsing path from entryPoints.
  // For example get 1.2.0-beta from ./lib/1.19.80/@minecraft/server@1.2.0-beta.d.ts, and compare which semver is greater.
  const compilerOptions = {
    paths: scriptModules.reduce((acc, module_name) => {
      const module_path = entryPoints.reverse().find((file) => file.startsWith(`./lib/${version}/@minecraft/server@`));
      if (module_path) {
        acc[module_name] = [module_path];
      } else {
        acc[module_name] = [];
      }
      return acc;
    }, {}),
  };

  console.log("entryPoints", entryPoints);
  console.log("paths", compilerOptions.paths);
  console.log("version", version);

  const options: Partial<TypeDocOptions> = {
    entryPoints,
    skipErrorChecking: true,
    disableSources: false,
    basePath: "./lib/" + version,
    logLevel: "Verbose",
    excludeInternal: true,
    cleanOutputDir: true,
    includeVersion: false,
    compilerOptions,
    name: "Script API - v" + version,
    readme: "README.md",
    tsconfig: "./tsconfig-typedoc.json"
  };

  // Make an application to execute typedoc
  const app = new Application();

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());
  
  app.bootstrap(options);
  
  const project = app.convert();
  await app.generateDocs(project, "./docs/.vuepress/dist/" + version);
}
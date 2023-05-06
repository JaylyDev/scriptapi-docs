const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

console.log(`env`, process.env.VERSION);
dotenv.config();
console.log(`env`, process.env.VERSION);

// Running typedoc now requires a version argument.
const version = process.env.VERSION;

if (!/^\d+\.\d+\.\d+(\.\d+)?$/.test(version)) {
  throw new Error("Environment variable 'VERSION' is not set. Accept '0.0.0' for stable, '0.0.0.0' for preview.");
};

/**
 * @param {string} dir
 * @returns {IterableIterator<string>}
 */
function* getFiles(dir) {
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

const entryPoints = [...getFiles("./lib")].filter(
  (file) =>
    file.startsWith(`./lib/${version}/@minecraft`) &&
    file.endsWith(".d.ts") &&
    !file.includes("internal")
);

const scriptModules = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-net",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
];

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

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints,
  out: "./docs/.vuepress/dist/" + version,
  skipErrorChecking: true,
  disableSources: false,
  basePath: "./lib/" + version,
  logLevel: "Verbose",
  excludeInternal: true,
  cleanOutputDir: true,
  includeVersion: false,
  compilerOptions: compilerOptions,
  name: "Script API - v" + version,
  readme: "README.md",
  tsconfig: "./tsconfig-typedoc.json"
};

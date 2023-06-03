import { Version } from "./fetchVersion";
import { execSync } from "child_process";
import * as dotenv from "dotenv";
import { applyStatsCollection, generateDocsIndexPage } from "./docsPages";
import { installBundle, installModule } from "./installModules";
import { existsSync, mkdirSync, readdirSync, rmSync } from "fs";
import { generateDocs } from "./typedoc";

dotenv.config();

const scriptModules = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-net",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
];

const bundleModules = [
  "@minecraft/vanilla-data",
];

const statsCollectEnabled = true;

async function installModules(modules: string[], installFunction: (module_name: string, version: string) => Promise<void>, version: string) {
  const installPromises = modules.map(async (module_name) => {
    try {
      await installFunction(module_name, version);
    } catch (error) {
      console.warn(`Failed to install ${installFunction.name} ${module_name}@${version}.\n`, error);
    }
  });

  await Promise.all(installPromises);
}

async function installScriptModules (version: Version) {
  console.log("Generating documentation for version " + version + "...");

  // remove existing types for that version only
  rmSync("./lib/" + version, { recursive: true, force: true, maxRetries: 3 });

  await Promise.all([
    installModules(scriptModules, installModule, version),
    installModules(bundleModules, installBundle, version),
  ]);    
  
  console.log("Successfully retrieved all modules.");
};

async function generate_documentation(rebuild: boolean = true) {
  // otherwise if input has no version, it only builds the docs from existing types in lib folder
  if (rebuild) console.log("No version specified. Rebuilding the entire documentation...");

  generateDocsIndexPage("./docs/index.md");
  console.log("Successfully generated index page.");
  
  console.log(execSync("npm run docs:build").toString());
  console.log("Successfully built docs at ./docs/.vuepress/dist");

  const lib = readdirSync("./lib");
  await Promise.allSettled(lib.map(libVer => new Promise((resolve, reject) => {
    generateDocs(libVer).then(resolve).catch(reject);
  })));
  
  if (statsCollectEnabled) {
    console.log("Applying stats collection to website.");
    const successCount = applyStatsCollection();
    console.log(`Successfully applied stats collection to ${successCount} pages.`);
  };
  
  console.log("Successfully generated documentation.");
};

const versions = typeof process.env.VERSION === "string" ? process.env.VERSION.split(/\s/) as Version[] : [] as Version[];

// Check if the version is valid against schema, if so download the types and generate docs for that specific version
// If version input exist but it's not valid, it throws error
versions.forEach(async version => {
  if (/^\d+\.\d+\.\d+(\.\d+)?$/.test(version)) {
    await installScriptModules(version)
  }
  else throw new Error(`Invalid version: ${version}. Accept '0.0.0' for stable, '0.0.0.0' for preview.`);
});

if (!existsSync("./lib")) mkdirSync("./lib");
generate_documentation(versions.length === 0);
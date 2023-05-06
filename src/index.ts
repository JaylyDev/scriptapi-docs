import { Version } from "./fetchVersion";
import { execSync } from "child_process";
import * as dotenv from "dotenv";
import { generateDocsIndexPage } from "./indexPage";
import { installBundle, installModule } from "./installModules";
import { existsSync, readdirSync, rmSync, writeFileSync } from "fs";
import { copyOldDocumentation } from "./fetchOldDocs";

dotenv.config();

const version = process.env.VERSION as Version;
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

const isValidVersion = /^\d+\.\d+\.\d+(\.\d+)?$/.test(version);

(async () => {
  if (isValidVersion) {
    console.log("Generating documentation for version " + version + "...");

    for (const module_name of scriptModules) {
      try {
        await installModule(module_name, version);        
      } catch (error) {
        console.warn(`Failed to install module ${module_name}@${version}.\n`, error);
      }
    };
  
    for (const module_name of bundleModules) {
      try {
        await installBundle(module_name, version);
      } catch (error) {
        console.warn(`Failed to install bundle ${module_name}@${version}.\n`, error);
      }
    };
    
    console.log("Successfully retrieved all modules.");
  }
  else if (!!version) throw new Error(`Invalid version: ${version}. Accept '0.0.0' for stable, '0.0.0.0' for preview.`);
  else console.log("No version specified. Rebuilding the entire documentation...");

  generateDocsIndexPage("./docs/index.md");
  console.log("Successfully generated index page.");
  
  console.log(execSync("npm run docs:build").toString());
  console.log("Successfully built docs at ./docs/.vuepress/dist");

  if (!version) {
    const lib = readdirSync("./lib");
    for (const libVer of lib) {
      console.log('env', libVer);
      // save environment variable VERSION to be used in typedoc
      writeFileSync(".env", `VERSION=${libVer}`);

      execSync("typedoc");
    };
  }
  else {
    // Pull existing documentation hosted on GitHub, to reduce build time.
    copyOldDocumentation();
    console.log("Successfully copied previous documentation at ./docs/.vuepress/dist");

    execSync("typedoc");
  };
  
  console.log("Successfully generated documentation.");
})();


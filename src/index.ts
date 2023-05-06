import { Version } from "./fetchVersion";
import { execSync } from "child_process";
import * as dotenv from "dotenv";
import { generateDocsIndexPage } from "./indexPage";
import { PackageMetadata, installBundle, installModule } from "./installModules";

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
]

console.log("Generating documentation for version " + version + "...");

(async () => {
  for (const module_name of scriptModules) {
    await installModule(module_name, version);
  };

  for (const module_name of bundleModules) {
    await installBundle(module_name, version);
  };
  
  console.log("Successfully retrieved all modules.");

  generateDocsIndexPage("./docs/index.md");
  console.log("Successfully generated index page.");
  
  execSync("npm run docs:build");
  console.log("Successfully built docs at ./docs/.vuepress/dist");

  execSync("typedoc");
  console.log("Successfully ran typedoc. Documentation are generated in ./docs/.vuepress/dist/" + version);
})();


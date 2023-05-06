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
  // Collect stats
  const installedModules: PackageMetadata[] = [];

  for (const module_name of scriptModules) {
    installedModules.push(...await installModule(module_name, version));
  };
  console.log("Successfully installed all modules.");

  for (const module_name of bundleModules) {
    installedModules.push(await installBundle(module_name, version));
  };

  generateDocsIndexPage("./docs/index.md", installedModules);
  console.log("Successfully generated index page.");
  
  execSync("npm run docs:build");
  console.log("Successfully built docs at ./docs/.vuepress/dist");

  execSync("typedoc");
  console.log("Successfully ran typedoc. Documentation are generated in ./docs/.vuepress/dist/" + version);
})();


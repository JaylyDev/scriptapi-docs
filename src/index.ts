import { Version } from "./fetchVersion";
import { execSync } from "child_process";
import { applyStatsCollection, generateDocsIndexPage, generateDocsUsingWorkers } from "./docsPages";
import { installBundle, installModule } from "./installModules";
import { existsSync, mkdirSync, readdirSync, rmSync } from "fs";
import { modifyExampleDocsSnippets } from "./snippetsEditor";
import axios from "axios";

const scriptModules = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-net",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
  "@minecraft/server-editor",
  "@minecraft/common",
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
      console.warn(`Failed to install ${module_name}@${version}.\n`, error);
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
    // ignore @minecraft/vanilla-data for now
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

  await generateDocsUsingWorkers();
  
  if (statsCollectEnabled) {
    console.log("Applying stats collection to website.");
    const successCount = applyStatsCollection();
    console.log(`Successfully applied stats collection to ${successCount} pages.`);
  };
  
  console.log("Successfully generated documentation.");
};

interface MojangVersionMetadata { version: string, date: string, type?: "preview" };
type MojangVersionJSON = { latest: MojangVersionMetadata }; 

// please do not break the pipeline mammerla
async function getMinecraftVersion() {
  const branches = ["main", "preview"];
  const responseDetails = await Promise.all(branches.map(branch => axios.get<MojangVersionJSON>(`https://raw.githubusercontent.com/Mojang/bedrock-samples/${branch}/version.json`)));
  const versionStrings = responseDetails.map(r => r.data.latest.version);
  const versions = versionStrings.map(r => r.split('.').map(v => parseInt(v)));
  let latestPreview: Version | undefined;
  let latestRelease: Version | undefined;

  // sort whether version is preview or not
  // if revision version is higher than 20, it's preview
  // otherwise if version is between 0-19, it's stable
  versions.forEach(v => {
    if (v[3] >= 20 && !latestPreview) latestPreview = v.join('.') as Version;
    else if (v[3] >= 0 && !latestRelease) {
      v.pop();
      latestRelease = v.join('.') as Version;
    }
  });

  return { latestPreview, latestRelease };
};

function removeLatestPreviewDocs() {
  for (const dir of readdirSync('./lib')) {
    if (dir.split('.').length === 4) rmSync("./lib/" + dir, { recursive: true, force: true, maxRetries: 3 }); }
};

async function fetchNewDocs () {
  const mcVersions = await getMinecraftVersion();
  const versions = [mcVersions.latestRelease, mcVersions.latestPreview];
  if (!existsSync("./lib")) mkdirSync("./lib");
  if (mcVersions.latestPreview) removeLatestPreviewDocs();

  // Check if the version is valid against schema, if so download the types and generate docs for that specific version
  // If version input exist but it's not valid, it throws error
  for (const version of versions) {
    if (/^\d+\.\d+\.\d+(\.\d+)?$/.test(version)) {
      await installScriptModules(version);

      for (const module_name of scriptModules) {
        modifyExampleDocsSnippets(module_name, version);
      }
    }
    else if (!!version) throw new Error(`Invalid version: ${version}. Accept '0.0.0' for stable, '0.0.0.0' for preview.`);
  }
  await generate_documentation(false);
};

fetchNewDocs();
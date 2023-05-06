import * as fs from "fs";
import { PackageMetadata } from "./installModules";

const docsRedirectUrl = (version: string) => `- <a href="${version}/index" target="_blank" rel="noreferrer">Script API - v${version}</a>`;

export function generateDocsIndexPage (location: string, metadata: PackageMetadata[]) {
  let indexMd = "<!-- This file is auto-generated, DO NOT modify this file. -->" + "\n\n"
              + fs.readFileSync("./README.md", "utf8") + "\n"
              + "## Versions" + "\n\n";

  const folders = fs.readdirSync("./lib").filter(v => fs.statSync(`./lib/${v}`).isDirectory() && /^\d+\.\d+\.\d+(\.\d+)?$/.test(v));
  for (const folder of folders) {
    indexMd += docsRedirectUrl(folder) + "\n";
  };

  // Generate installation section
  indexMd += "## Installation" + "\n\n"
           + "Script API runs on Minecraft, but TypeScript type definitions for API modules are available as a NPM package." + "\n";

  fs.writeFileSync(location, indexMd);
};
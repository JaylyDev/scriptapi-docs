import * as fs from "fs";

const docsRedirectUrl = (version: string) => `- <a href="${version}/index" target="_blank" rel="noreferrer">Script API - v${version}</a>`;

export function generateDocsIndexPage (location: string) {
  let indexMd = "<!-- This file is auto-generated, DO NOT modify this file. -->" + "\n\n"
              + fs.readFileSync("./README.md", "utf8") + "\n"
              + "## Versions" + "\n\n";

  const folders = fs.readdirSync("./lib").filter(v => fs.statSync(`./lib/${v}`).isDirectory() && /^\d+\.\d+\.\d+(\.\d+)?$/.test(v));
  for (const folder of folders) {
    indexMd += docsRedirectUrl(folder) + "\n";
  };

  fs.writeFileSync(location, indexMd);
};
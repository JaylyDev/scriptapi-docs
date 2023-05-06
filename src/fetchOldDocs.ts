import { execSync } from "child_process";
import * as fs from "fs-extra";
import path = require("path");

const tempBranchDir = ".temp/scriptapi-docs";
const gitUrl = "https://github.com/jaylydev/scriptapi-docs.git";
const branch = "gh-pages";

export function copyOldDocumentation () {
  execSync(`git clone --depth 1 --single-branch --branch ${branch} ${gitUrl} ${tempBranchDir}`);
  const folders = fs.readdirSync(path.resolve(tempBranchDir)).filter(f =>
    // Only include folders that start with 1.
    f.startsWith("1.")
    // Not current version that it's fetching
    && f !== process.env.VERSION
    // Is directory
    && fs.statSync(path.resolve(tempBranchDir, f)).isDirectory()
  );
  folders.forEach(folder => {
    // Copy each folder to the dist folder
    fs.copySync(
      path.resolve(tempBranchDir, folder),
      path.resolve("./docs/.vuepress/dist", folder)
    );
  });

  console.log("Successfully copied existing documentation to ./docs/.vuepress/dist");

  // Remove the cloned directory
  fs.rmdirSync(tempBranchDir, { recursive: true });
  console.log("Successfully removed cloned directory.");
};
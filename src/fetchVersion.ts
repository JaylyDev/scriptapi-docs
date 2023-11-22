import axios from "axios";
import type * as npm from "@npm/types";
import * as fs from 'fs-extra';
import * as semver from "semver";

const REGISTRY = 'https://registry.npmjs.org/';
const ignoredKeys = [ 'created', 'modified' ];

interface VersionResult {
  readonly moduleVersion: string,
  readonly engineVersion: string
};

export type Version = `${string}.${string}.${string}` | `${string}.${string}.${string}.${string}`;
export const versionRegex = /^\d+\.\d+\.\d+(\.\d+)?$/;
const globalMinecraftModules = ["@minecraft/common"];

export function splitVersion(versionString: string, platform: "npm" | "minecraft"): VersionResult | null {
  const parsedVersion = semver.parse(versionString);

  if (!parsedVersion) {
    // invalid version string
    return null;
  }

  const { major, minor, patch, prerelease } = parsedVersion;
  const moduleChannel = prerelease[0]?.toString();
  const moduleVersion = `${major}.${minor}.${patch}-${moduleChannel}`;
  const engineVersion = versionString.replace(`${moduleVersion}.`, '')
                                     .replace(/^preview\.(\d+\.\d+\.\d+)\.(\d+)$/, "$1-preview.$2")
                                     .replace(/^release\.(\d+\.\d+\.\d+)$/, "$1-stable");

  if (platform === "minecraft") {
    // stable version
    if (!moduleChannel || moduleChannel === 'rc') return { moduleVersion: `${major}.${minor}.${patch}`, engineVersion: '' };
    // prerelease version
    else return { moduleVersion, engineVersion };
  }
  else {
    // stable version
    if (!moduleChannel) return { moduleVersion: `${major}.${minor}.${patch}`, engineVersion: '' };
    // prerelease version
    return { moduleVersion, engineVersion };
  }
};

/**
 * 
 * @param mcVersion Minecraft version
 * @param moduleName Minecraft module_name
 */
export async function getVersions(mcVersion: Version, moduleName: string): Promise<string[]> {
  if (!versionRegex.test(mcVersion)) {
    throw new Error('Invalid version. Accept "1.0.0" for stable version, or "1.0.0.0" for preview version.');
  };

  const [major, minor, patch, revision] = mcVersion.split('.');
  const versionString = !revision ? `${major}.${minor}.${patch}-stable` : `${major}.${minor}.${patch}-preview.${revision}`;
  const response = await axios.get(REGISTRY + moduleName);
  const packument = response.data as npm.Packument;
  const { time } = packument;
  
  for (const key of ignoredKeys) {
    delete time[key];
  };

  /**
   * Complete version list, sorted by latest
   * Example version format
   * 1.1.0-beta.1.19.0-preview.25
   * 1.0.0-rc.1.19.0-preview.25
   * 0.1.0
   */
  const versionsList = Object.keys(time).sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(time[a]).getTime() - new Date(time[b]).getTime();
  }).reverse().map(v => v.replace(/\^|\~/, ''));

  const latestVersions = versionsList.filter(v => semver.parse(v).prerelease.length === 0) ?? ["0.0.0"];
  const latestVersion = versionsList.find(v => semver.parse(v).prerelease.length === 0) ?? "0.0.0";

  const latestBeta = versionsList.find(v => {
    const { moduleVersion, engineVersion } = splitVersion(v, "npm");
    const [channel] = semver.parse(v).prerelease;
    return channel === 'beta' && semver.compare(moduleVersion, latestVersion) > 0 && (semver.compare(engineVersion, versionString) === 0 || semver.compare(engineVersion, versionString) < 0)
  });

  const latestRcs = versionsList.filter(v => {
    const { moduleVersion, engineVersion } = splitVersion(v, "npm");
    const [channel] = semver.parse(v).prerelease;
    return channel === 'rc' && semver.compare(moduleVersion, latestVersion) > 0 && semver.compare(engineVersion, versionString) === 0
  });

  // mojang minecraft common module is way too special.
  if (!latestBeta && globalMinecraftModules.includes(moduleName) && mcVersion.split('.').length === 3) return latestVersions;
  else if (!latestBeta && globalMinecraftModules.includes(moduleName) && mcVersion.split('.').length === 4) return [...latestRcs, ...latestVersions];
  else if (!latestBeta && !globalMinecraftModules.includes(moduleName)) console.error("No latest beta version found for '" + moduleName + "'. Please check the version string or try again later.");
  
  // definitely normal api modules
  return [latestBeta, ...latestRcs, ...latestVersions];
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

export async function downloadFile(fileUrl: string, outputLocationPath: string) {
  const writer = fs.createWriteStream(outputLocationPath);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
  }).then(response => {

    //ensure that the user can call `then()` only when the file has
    //been downloaded entirely.

    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on('error', err => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on('close', () => {
        if (!error) {
          resolve(true);
        }
        //no need to call the reject here, as it will have been called in the
        //'error' stream;
      });
    });
  });
}

import axios from "axios";
import type * as npm from "@npm/types";
import * as semver from "semver";

const REGISTRY = 'https://registry.npmjs.org/';
const ignoredKeys = [ 'created', 'modified' ];

interface VersionResult {
  readonly moduleVersion: string,
  readonly engineVersion: string
};

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

export type Version = `${string}.${string}.${string}` | `${string}.${string}.${string}-${string}`;
export const versionRegex = /^\d+\.\d+\.\d+(\.\d+)?$/;

/**
 * 
 * @param mcVersion Minecraft version
 * @param module Minecraft module
 */
export async function getVersions(mcVersion: Version, module: string): Promise<string[]> {
  if (!versionRegex.test(mcVersion)) {
    throw new Error('Invalid version. Accept "1.0.0" for stable version, or "1.0.0.0" for preview version.');
  };

  const [major, minor, patch, revision] = mcVersion.split('.');
  const versionString = !revision ? `${major}.${minor}.${patch}-stable` : `${major}.${minor}.${patch}-preview.${revision}`;
  const response = await axios.get(REGISTRY + module);
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
  }).reverse();

  const latestVersions = [undefined, ...versionsList.filter(v => semver.parse(v).prerelease.length === 0)];

  let latestBeta: string | undefined;

  while (!latestBeta) {
    latestVersions.shift();
    latestBeta = versionsList.find(v => {
      const { moduleVersion, engineVersion } = splitVersion(v, "npm");
      const latestVersion = latestVersions[0] ?? "0.0.0";
      return semver.parse(v).prerelease[0] === 'beta' && semver.compare(moduleVersion, latestVersion) > 0 && semver.compare(engineVersion, versionString) === 0
    });
  };

  const latestRc = versionsList.filter(v => {
    const { moduleVersion, engineVersion } = splitVersion(v, "npm");
    const latestVersion = latestVersions[0] ?? "0.0.0";
    return semver.parse(v).prerelease[0] === 'rc' && semver.compare(moduleVersion, latestVersion) > 0 && semver.compare(engineVersion, versionString) === 0
  });

  const versions: string[] = [];
  versions.push(latestBeta);
  if (!!latestRc) versions.push(...latestRc);
  versions.push(...latestVersions);

  return versions;
};
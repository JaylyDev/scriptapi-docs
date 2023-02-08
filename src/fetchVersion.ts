import { Channel, script_modules } from "./variables";
import axios from "axios";
import type * as npm from "@npm/types";
import * as tar from 'tar';
import * as fs from 'fs-extra';
import * as path from 'path';

const REGISTRY = 'https://registry.npmjs.org/';
const cacheFolder = script_modules;
const ignoredKeys = [ 'created', 'modified' ];

interface npmFetchResult {
  version: string,
  tarball: string
};

export async function getVersion(channel: Channel, module: string): Promise<npmFetchResult> {
  const response = await axios.get(REGISTRY + module);
  const packument = response.data as npm.Packument;
  const { time } = packument;
  
  for (const key of ignoredKeys) {
    delete time[key];
  };

  const sorted = Object.keys(time).sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(time[a]).getTime() - new Date(time[b]).getTime();
  }).reverse();

  const latestPreview = sorted.find((v) => v.includes('preview'));
  const latestRelease = sorted.find((v) => v.includes('release') || v.includes('stable'));
  console.log(`${module} - preview: ${latestPreview}, release: ${latestRelease}`);

  switch (channel) {
    case 'stable':
      return {
        version: latestRelease,
        tarball: packument.versions[latestRelease].dist.tarball
      };

    case 'preview':
      return {
        version: latestPreview,
        tarball: packument.versions[latestPreview].dist.tarball
      };
  
    default:
      throw 'Channel not found';
  }
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

/**
 * 
 * @param channel minecraft version channel
 * @param module script module
 * @returns file
 */
export async function downloadScriptModuleTypings(channel: Channel, module: string) {
  const outputPath = path.resolve(script_modules, channel, module);
  const result = await getVersion(channel, module);
  const filename = path.basename(result.tarball);
  const tgzFile = path.resolve(cacheFolder, filename);

  console.log(`Latest ${channel} version for ${module} is ${result.version}`);

  // download and extract tar.gz
  await downloadFile(result.tarball, tgzFile);
  await tar.extract({ file: tgzFile, cwd: cacheFolder });
  fs.moveSync(path.resolve(cacheFolder, 'package'), outputPath, { overwrite: true }); // move package folder to root

  return {
    version: result.version,
    file: fs.readFileSync(path.resolve(outputPath, 'index.d.ts'))
  }
};

// create directory
if (fs.existsSync(cacheFolder)) fs.rmSync(cacheFolder, { recursive: true });    
fs.mkdirSync(cacheFolder, { recursive: true });

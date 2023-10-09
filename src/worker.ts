import { parentPort, workerData } from 'worker_threads';
import { LatestChannel, renderHtml } from './typedoc';
import { readdirSync } from 'fs';
import * as path from 'path';

/**
 * @param {string} dir
 * @returns {IterableIterator<string>}
 */
function* getFiles(dir: string): IterableIterator<string> {
  const dirents = readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res.replace(process.cwd(), ".").replace(/\\/g, "/");
    }
  }
}

/**
 * Generate typedoc documentation for a specific version.
 * @param version 
 */
async function generateDocs (version: string, channel: LatestChannel) {
  const entryPoints = [...getFiles("./lib/" + version)].filter((file) => file.endsWith(".d.ts") && !file.includes("internal")).map(v => path.dirname(v));

  await renderHtml(entryPoints, version, channel);
}
// main entry
generateDocs(workerData.libVer, workerData.channel).then(() => {
  parentPort.postMessage({ libVer: workerData.libVer, channel: workerData.channel });
});

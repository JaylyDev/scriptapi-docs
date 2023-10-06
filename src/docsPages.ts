import * as fs from "fs";
import * as path from "path";
import { Worker, isMainThread } from 'worker_threads';

const docsRedirectUrl = (version: string) => `- <a href="${version}" target="_blank" rel="noreferrer">Script API - v${version}</a>`;

function *walkSync(dir: string) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

export function generateDocsIndexPage (location: string) {
  let indexMd = "<!-- This file is auto-generated, DO NOT modify this file. -->" + "\n\n"
              + fs.readFileSync("./README.md", "utf8") + "\n"
              + "## Versions" + "\n\n";

  const folders = fs.readdirSync("./lib").filter(v => fs.statSync(`./lib/${v}`).isDirectory() && /^\d+\.\d+\.\d+(\.\d+)?$/.test(v));
  for (const folder of folders.reverse()) {
    indexMd += docsRedirectUrl(folder) + "\n";
  };

  fs.writeFileSync(location, indexMd);
};

export function applyStatsCollection () {
  const googleAnalyticsCode = `<!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.MEASURE_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', '${process.env.MEASURE_ID}');
  </script>`;
  const adsenseCode = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_CLIENT}"
  crossorigin="anonymous"></script>`;

  let successCount = 0;

  for (const filePath of walkSync("./docs/.vuepress/dist")) {
    if (path.extname(filePath) !== ".html") continue;
    const file = fs.readFileSync(filePath, "utf8");
    const newFile = file.replace("</head>", googleAnalyticsCode + adsenseCode + "</head>");
    fs.writeFileSync(filePath, newFile);
    successCount++;
  };

  return successCount;
};

// Get latest version for release and preview channelss
function getLatestVersions (versions: string[]) {
  const { latestReleaseVersion, latestPreviewVersion } = versions.reduce(
    (acc, version) => {
      const versionParts = version.split('.');
      
      if (versionParts.length === 3 && version > acc.latestReleaseVersion) {
        acc.latestReleaseVersion = version;
      } else if (versionParts.length === 4 && version > acc.latestPreviewVersion) {
        acc.latestPreviewVersion = version;
      }
      
      return acc;
    },
    { latestReleaseVersion: '', latestPreviewVersion: '' }
  );
  return { latestReleaseVersion, latestPreviewVersion };  
};

// using worker_threads to generate docs to improve performance
export function generateDocsUsingWorkers() {
  const lib = fs.readdirSync("./lib");
  const { latestReleaseVersion, latestPreviewVersion } = getLatestVersions(lib);

  if (isMainThread) {
    lib.forEach((libVer) => {
      let channel = null;
      if (libVer === latestReleaseVersion) {
        channel = "latest";
      } else if (libVer === latestPreviewVersion) {
        channel = "preview";
      }

      // Create a new worker for each task
      const worker = new Worker(path.resolve(__dirname, "worker.js"), {
        workerData: { libVer, channel },
      });

      // Listen for messages from the worker
      worker.on('message', (message) => {
        console.log(`Worker finished for ${message.libVer} - ${message.channel}`);
      });

      // Listen for errors in the worker
      worker.on('error', (error) => {
        console.error(`Worker error for ${libVer} - ${channel}:`, error);
      });

      // Listen for worker termination
      worker.on('exit', (code) => {
        if (code !== 0) {
          console.error(`Worker stopped with exit code ${code}`);
        }
      });
    });
  }
}
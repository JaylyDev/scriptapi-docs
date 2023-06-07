import * as fs from "fs";
import * as path from "path";

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

import { readdirSync, writeFile, writeFileSync } from "fs";
import path from "path";
import { Application, TSConfigReader, TypeDocReader } from "typedoc";

const script_module = (channel: "preview" | "stable") =>
  path.resolve(process.cwd(), "script_modules", channel);

export async function generateDocs(
  modulePath: string,
  channel: "preview" | "stable"
) {
  const app = new Application();

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());

  app.bootstrap({
    tsconfig: path.resolve(modulePath, "tsconfig.json"),
    entryPoints: [
      path.resolve(modulePath, "@minecraft/server/index.d.ts"),
      path.resolve(modulePath, "@minecraft/server-admin/index.d.ts"),
      path.resolve(modulePath, "@minecraft/server-gametest/index.d.ts"),
      path.resolve(modulePath, "@minecraft/server-net/index.d.ts"),
      path.resolve(modulePath, "@minecraft/server-ui/index.d.ts"),
    ],
    name: channel.substring(0, 1).toUpperCase() + channel.substring(1).toLowerCase(),
    basePath: modulePath,
    cleanOutputDir: true,
  });

  const project = app.convert();

  if (project) {
    // Project may not have converted correctly
    const outputDir = "static/" + channel;

    project.readme = [
      {
        kind: "code",
        text: `# Script API Reference Documentation

Landing page containing a high-level introduction of experimental Script APIs for Minecraft: Bedrock Edition.`,
      },
    ];

    // Rendered docs
    await app.generateDocs(project, outputDir);
    // Alternatively generate JSON output
    await app.generateJson(project, outputDir + "/documentation.json");
  }
}

export async function generateTsConfig(channel: "preview" | "stable") {
  const config = {
    compilerOptions: {
      module: "commonjs",
      lib: ["es6"],
      target: "es6",
      forceConsistentCasingInFileNames: true,
      noImplicitAny: true,
      noImplicitThis: true,
      strictFunctionTypes: true,
      strictNullChecks: true,
      baseUrl: "./",
      skipLibCheck: true
    },
    files: [ ]
  };

  for (const scriptModule of readdirSync(path.resolve(script_module(channel), '@minecraft'))) {
    config.files.push( `./@minecraft/${scriptModule}/index.d.ts` );
  };

  writeFileSync(path.resolve(script_module(channel), 'tsconfig.json'), JSON.stringify(config));
}
export async function preview() {
  const modulePath = script_module("preview");

  generateTsConfig("preview");
  return await generateDocs(modulePath, "preview");
}

export async function stable() {
  const modulePath = script_module("stable");

  generateTsConfig("stable");
  return await generateDocs(modulePath, "stable");
}

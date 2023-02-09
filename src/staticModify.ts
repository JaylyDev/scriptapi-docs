import * as fs from 'fs';
import path from 'path';

const staticDirectory = path.resolve(process.cwd(), 'static');

function readDirSync(dir: string) {
  let Files: string[] = [];

  function ThroughDirectory(Directory: string) {
    fs.readdirSync(Directory).forEach(File => {
      const Absolute = path.join(Directory, File);
      if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
      else return Files.push(Absolute);
    });
  }
  ThroughDirectory(dir);
  return Files;
}

console.log('Modifying static pages');

for (const filePath of readDirSync(staticDirectory)) {
  if (path.extname(filePath) !== '.html') continue;

  const file = fs.readFileSync(filePath).toString();
  const dist = file.replaceAll('"/', '"./');

  fs.writeFileSync(filePath, dist);

  console.log('Modified', filePath);
};
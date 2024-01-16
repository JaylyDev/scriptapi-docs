import { Node, Project, ClassDeclaration, EnumDeclaration, MethodDeclaration, PropertyDeclaration, EnumMember, InterfaceDeclaration, TypeAliasDeclaration, VariableStatement, PropertySignature, MethodSignature, ConstructorDeclaration, GetAccessorDeclaration, SetAccessorDeclaration, IndexSignatureDeclaration, CallSignatureDeclaration, ConstructSignatureDeclaration, JSDoc, JSDocTag, JSDocTagStructure, StructureKind, ts } from "ts-morph";
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

const project = new Project();

type SupportedNode = ClassDeclaration
  | InterfaceDeclaration
  | EnumDeclaration
  | VariableStatement
  | PropertySignature
  | TypeAliasDeclaration
  | MethodDeclaration
  | EnumMember
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | VariableStatement
  | VariableStatement
  | PropertySignature
  | MethodSignature
  | ConstructorDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | PropertyDeclaration;

interface NodeMapping {
  tsPath: string;
  node: SupportedNode;
};

const join = (...parts: string[]) => parts.join(".");

class JSDocExample {
  filename: string;
  code: string;
  language: string;
  tag: JSDocTag;
  parent: JSDoc;
  public get tagText(): string {
    return this.filename + '\n' + this.code;
  }

  constructor(filename: string, code: string, tag: JSDocTag, parent: JSDoc) {
    this.filename = filename;
    this.code = code;
    this.parent = parent;
    this.tag = tag;
    this.language = path.extname(filename).slice(1);
  };
};

function getExistingExampleDoc(doc: JSDoc) {
  const examples: JSDocExample[] = [];
  doc.getTags().forEach((tag) => {
    if (tag.getTagName() !== 'example') return;

    const commentText = tag.getCommentText();
    // Extract filename
    const filenameRegex = /(\w+\.[a-zA-Z]+)/;
    const filenameMatch = commentText.match(filenameRegex);
    const filename = filenameMatch[1];

    // Extract code text and language within code block
    const codeRegex = /```\w+\r?\n([\s\S]+?)\r?\n```/;
    const codeMatch = commentText.match(codeRegex);

    if (!filename || !codeMatch) return;
    const [, code] = codeMatch;

    examples.push(new JSDocExample(filename, code, tag, doc));
  });
  return examples;
}

function getFiles(dir: string): string[] {
  const files: string[] = [];
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) files.push(...getFiles(res));
    else files.push(res.replace(process.cwd() + path.sep, ""));
  };
  return files;
}

const prettierOptions: prettier.Options = {
  parser: 'typescript',
  tabWidth: 4
};

const formatDocExample = (filepath: string, code: string) => path.basename(filepath) + '\n' + "```" + path.extname(filepath).slice(1) + '\n' + prettier.format(code.replace(/\/\*([\s\S]*?)\*\//g, ''), prettierOptions) + "```"

function reader(tsPath: string, doc: JSDoc, module_name: string) {
  const dir = path.resolve('examples', module_name, tsPath.replace(/\./g, '/'));
  const exampleDocs: JSDocExample[] = getExistingExampleDoc(doc);

  // get examples from typings and save to file
  // let changed = false;
  // for (const docExample of exampleDocs) {
  //   const filepath = path.resolve(dir, docExample.filename);

  //   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  //   fs.writeFileSync(filepath, docExample.code);
    
    // Please avoid modifying existing code examples from typings for now.
    // else if (fs.existsSync(filepath)) {
    //   const text = fs.readFileSync(filepath, 'utf8');
    //   if (text === docExample.code) continue;
    //   console.log(`Changing example to ${tsPath} (${path.basename(filepath)})`);

    //   docExample.tag.set({ text: formatDocExample(filepath, text), tagName: 'example' });
    //   changed = true;
    // };
  // };

  // // Only replace if the node is changed/modified
  // if (changed) {
  //   const formatted = prettier.format(doc.getText(), prettierOptions);
  //   doc.replaceWithText(formatted);
  // };

  // Make a reserved.json file, includes examples snippets in original typing already
  const reserved = {
    reserved_files: exampleDocs.map(v => v.filename)
  };
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFile(path.resolve(dir, 'reserved.json'), JSON.stringify(reserved, null, 2), console.error);

  // Insert examples to typings
  if (fs.existsSync(dir)) {
    const allowedExtensions = ['.ts', '.js'];
    const additionalExamples = getFiles(dir).filter(name => exampleDocs.findIndex(doc => doc.filename === path.basename(name)) === -1 && allowedExtensions.includes(path.extname(name)));
    if (additionalExamples.length === 0) return;

    const jsdoctags = additionalExamples.map(filepath => {
      console.log(`Adding new example to ${tsPath} (${path.basename(filepath)})`);
      const text = fs.readFileSync(filepath, { encoding: 'utf8' });
      const structure: JSDocTagStructure = {
        tagName: "example",
        kind: StructureKind.JSDocTag,
        text: formatDocExample(filepath, text)
      };
      return structure;
    });
    doc.addTags(jsdoctags);

    const formatted = prettier.format(doc.getText(), prettierOptions).replace(/\n\s*$/, "");
    doc.replaceWithText(formatted);
  };
};

// Print the paths
export function modifyExampleDocsSnippets(module_name: string, version: string) {
  const sourcePaths = getFiles(`lib/${version}`).filter(file => file.startsWith(path.join('lib', version, module_name + '@')) && path.basename(file) == 'index.d.ts');
  const sourceFiles = project.addSourceFilesAtPaths(sourcePaths);

  console.log(sourcePaths);

  for (const sourceFile of sourceFiles) {
    // Array to store the paths
    const paths: NodeMapping[] = [];

    // Visit each node in the source file
    sourceFile.forEachDescendant((node) => {
      // Check different node types
      if (Node.isClassDeclaration(node)) {
        paths.push({ tsPath: join(node.getName(), "constructor"), node });

        // Visit static methods
        node.getStaticMethods().forEach((method) => {
          paths.push({ tsPath: join(node.getName(), method.getName()), node: method });
        });

        // Visit instance methods
        node.getInstanceMethods().forEach((method) => {
          paths.push({ tsPath: join(node.getName(), 'prototype', method.getName()), node: method });
        });

        node.getStaticMembers().filter(Node.isPropertyDeclaration).forEach((property) => {
          paths.push({ tsPath: join(node.getName(), property.getName()), node: property });
        });
        node.getInstanceMembers().filter(Node.isPropertyDeclaration).forEach((property) => {
          paths.push({ tsPath: join(node.getName(), 'prototype', property.getName()), node: property });
        });
      }
      else if (Node.isInterfaceDeclaration(node)) {
        paths.push({ tsPath: node.getName(), node });

        // Visit interface properties
        node.getProperties().forEach((property) => {
          paths.push({ tsPath: join(node.getName(), property.getName()), node: property });
        });
      }
      else if (Node.isEnumDeclaration(node)) {
        paths.push({ tsPath: node.getName(), node });

        // Visit enum members
        node.getMembers().forEach((member) => {
          paths.push({ tsPath: `${node.getName()}.${member.getName()}`, node: member });
        });
      };
    });

    for (let i = 0; i < paths.length; i++) {
      const { tsPath, node } = paths[i];
      // ignores Minecraft*Types
      if (tsPath.startsWith('Minecraft')) continue;

      const docs = node.getJsDocs();
      const dir = path.resolve('examples', module_name, tsPath.replace(/\./g, '/'));

      if (docs.length === 0 && fs.existsSync(dir) && fs.readdirSync(dir).length > 0) {
        const doc = node.addJsDoc({ description: '' });
        docs.push(doc);
      };

      if (docs.length > 0) reader(tsPath, docs[docs.length - 1], module_name);
    }
    sourceFile.saveSync();
    console.log(`Saved file to ${sourceFile.getFilePath()}`);
  }
};

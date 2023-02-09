import path from "path";
import * as vitepress from "vitepress";

/**
 * @type {vitepress.UserConfig}
 */
export default {
  title: 'Script API References',
  description: 'Script API References',
  outDir: path.resolve(process.cwd(), 'static'),
  base: '/scriptapi-docs'
}

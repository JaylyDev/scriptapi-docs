
/**
 * Export following modules to TS compiler runtime
 */
export const modules = [
  '@minecraft/server',
  '@minecraft/server-ui',
  '@minecraft/server-gametest',
  '@minecraft/server-admin',
  '@minecraft/server-net'
];
export const channels = [ 'stable', 'preview' ] as const;
export type Channel = typeof channels[number];

import * as path from 'path';
export const script_modules = path.resolve(process.cwd(), 'script_modules');

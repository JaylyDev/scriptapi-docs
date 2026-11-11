import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension('overworld').getBlock({ x: 0, y: 0, z: 0 });

// List all block states
const blockStates = block.permutation.getAllStates();
console.log(JSON.stringify(blockStates, null, 4));

import { BlockPermutation, BlockVolume, world } from "@minecraft/server";

// Command: /fill 0 10 0 20 30 40 underwater_tnt replace air
const overworld = world.getDimension('overworld');
const volume = new BlockVolume({ x: 0, y: 10, z: 0 }, { x: 20, y: 30, z: 40 });
const tnt = BlockPermutation.resolve('minecraft:underwater_tnt');
overworld.fillBlocks(volume, tnt, { blockFilter: { excludeTypes: ['minecraft:air'] } });
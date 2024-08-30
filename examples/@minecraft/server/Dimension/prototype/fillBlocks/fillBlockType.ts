import { BlockPermutation, BlockVolume, Dimension, Vector3, world } from "@minecraft/server";

function fillBlockType(dimension: Dimension, from: Vector3, to: Vector3, block: string): void {
  const volume = new BlockVolume(from, to);
  dimension.fillBlocks(volume, block);
}

// Command: /fill 0 10 0 20 30 40 diamond_block
const overworld = world.getDimension('overworld');
fillBlockType(overworld, { x: 0, y: 10, z: 0 }, { x: 20, y: 30, z: 40 }, 'minecraft:diamond_block');
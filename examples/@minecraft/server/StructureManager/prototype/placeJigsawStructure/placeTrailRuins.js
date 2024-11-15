import { world } from "@minecraft/server";

// Command for /place structure minecraft:trail_ruins 10 20 30
function placeTrailRuins() {
  const overworld = world.getDimension('overworld');
  world.structureManager.placeJigsawStructure('minecraft:trail_ruins', overworld, { x: 10, y: 20, z: 30 });
};
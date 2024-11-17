import { world } from "@minecraft/server";

// Command for /place structure minecraft:trial_chambers 10 20 30 true true
function placeTrialChambers() {
  const overworld = world.getDimension("overworld");
  // Spawn trial chambers structure in overworld
  world.structureManager.placeJigsawStructure(
    "minecraft:trial_chambers",
    overworld,
    { x: 10, y: 20, z: 30 },
    { ignoreStartHeight: true, keepJigsaws: true }
  );
}

import { world, StructureAnimationMode, StructureSaveMode, BlockPermutation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function getRandomStructure() {
  // Return existing mystructure:random structure
  if (world.structureManager.getWorldStructureIds().includes('mystructure:random')) {
    return world.structureManager.get('mystructure:random');
  };

  // Create a new mystructure:random structure otherwise
  const structure = world.structureManager.createEmpty('mystructure:random', { x: 10, y: 10, z: 10 }, StructureSaveMode.World);
  const concretes = [
    MinecraftBlockTypes.RedConcrete,
    MinecraftBlockTypes.YellowConcrete,
    MinecraftBlockTypes.BlueConcrete,
  ];

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      for (let z = 0; z < 10; z++) {
        const permutation = BlockPermutation.resolve(concretes[Math.floor(Math.random() * concretes.length)]);
        structure.setBlockPermutation({x, y, z}, permutation);
      }
    }  
  };

  return structure;
}

const structure = getRandomStructure();
const player = world.getPlayers()[0];
// Place structure on player's location
world.structureManager.place(structure, player.dimension, player.location, { animationMode: StructureAnimationMode.Blocks, animationSeconds: 15 });
import { BiomeTypes, Player } from "@minecraft/server";

const biomeTypes = BiomeTypes.getAll();

// Finds which biome player is in currently
function getBiome(player: Player): string {
  for(const currentBiome of biomeTypes) {
    const biome = player.dimension.findClosestBiome(player.location, currentBiome, { boundingSize: {x: 64, y: 64, z: 64} });
    if(biome !== undefined) {
      return currentBiome.id;
    }
  }
  throw new Error('Player is not in any biome');
}
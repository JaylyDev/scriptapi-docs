import { BiomeTypes, Player } from "@minecraft/server";

const biomeTypes = BiomeTypes.getAll();

/**
 * @description
 * Finds which biome player is in currently
 * @deprecated Check out getBiome.ts or getBiomes.ts examples instead
 */
function getBiome(player: Player): string {
  for(const currentBiome of biomeTypes) {
    const biome = player.dimension.findClosestBiome(player.location, currentBiome, { boundingSize: {x: 64, y: 64, z: 64} });
    if(biome !== undefined) {
      return currentBiome.id;
    }
  }
  throw new Error('Player is not in any biome');
}
// Script by JaylyMC
import { BiomeTypes, system, world } from '@minecraft/server';
import { Vector3Utils } from "@minecraft/math";
/**
 * Returns the biomes that this location in this dimension resides in
 * @param location The location to search for a biome
 * @param dimension The dimension to search for a biome
 * @returns All biomes that this location in this dimension resides in,
 * with closest distance attribute provided.
 */
function getBiomes(location, dimension) {
    // Retrieve a list of all available biome types in the dimension.
    const biomeTypes = BiomeTypes.getAll();
    // Define the search options, specifying a bounding search area of 64 blocks in all directions.
    const searchOptions = {
        boundingSize: { x: 64, y: 64, z: 64 }
    };
    // Initialize an array to store the closest biomes and their respective distances.
    const closestBiomes = [];
    // Iterate through each biome type and attempt to find the closest instance of each.
    for (const biome of biomeTypes) {
        // Find the closest location of the current biome within the search bounds.
        const biomeLocation = dimension.findClosestBiome(location, biome, searchOptions);
        // If a location is found, calculate the distance from the given location.
        if (biomeLocation) {
            const distance = Vector3Utils.distance(biomeLocation, location);
            // Store the biome and its calculated distance in the results array.
            closestBiomes.push({ biome, distance });
        }
    }
    // Return the array containing all found biomes and their distances.
    return closestBiomes;
}
// Example: Gets all biomes that this player resides in to action bar
const player = world.getPlayers()[0];
system.runInterval(() => {
    const start = Date.now();
    const result = getBiomes(player.location, player.dimension);
    const end = Date.now();
    for (const { biome, distance } of result) {
        player.onScreenDisplay.setActionBar(`Biome: ${biome.id}, Distance: ${distance}`);
    }
    console.log(`Took ${end - start}ms to find all biomes`);
});

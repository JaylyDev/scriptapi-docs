// Script by JaylyMC
import { BiomeTypes, system, world } from '@minecraft/server';
import { Vector3Utils } from "@minecraft/math";
/**
 * Returns the biome that this location in this dimension resides in
 * @param location The location to search for a biome
 * @param dimension The dimension to search for a biome
 * @returns The biome that this location in this dimension resides in
 */
function getBiome(location, dimension) {
    // Retrieve a list of all available biome types in the dimension.
    const biomeTypes = BiomeTypes.getAll();
    // Define the search options, specifying a bounding search area of 64 blocks in all directions.
    const searchOptions = {
        boundingSize: { x: 64, y: 64, z: 64 }
    };
    // Variable to track the closest biome found during the search.
    let closestBiome;
    // Iterate through all available biome types.
    for (const biome of biomeTypes) {
        // Attempt to locate the closest instance of the current biome type.
        const biomeLocation = dimension.findClosestBiome(location, biome, searchOptions);
        // If a biome location is found, calculate its distance from the input location.
        if (biomeLocation) {
            const distance = Vector3Utils.distance(biomeLocation, location);
            // Update `closestBiome` if this biome is closer than the previously found one.
            if (!closestBiome || distance < closestBiome.distance) {
                closestBiome = { biome, distance };
            }
        }
    }
    // If no biome was found within the search area, throw an error.
    if (!closestBiome) {
        throw new Error(`Could not find any biome within given location`);
    }
    // Return the closest biome type found.
    return closestBiome.biome;
}
// Example: Gets the biome that this player resides in to action bar
const player = world.getPlayers()[0];
system.runInterval(() => {
    const start = Date.now();
    const result = getBiome(player.location, player.dimension);
    const end = Date.now();
    player.onScreenDisplay.setActionBar(`Biome: ${result.id} (${end - start}ms)`);
});

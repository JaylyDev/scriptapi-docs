import { BiomeTypes } from "@minecraft/server";

// Returns all registered biome ids within Minecraft
const allBiomeTypes = BiomeTypes.getAll();

for (const biomeType of allBiomeTypes) {
  console.log(`Biome Type: ${biomeType}`);
}
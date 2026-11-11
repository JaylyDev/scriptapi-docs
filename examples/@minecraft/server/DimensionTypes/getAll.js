import { DimensionTypes } from "@minecraft/server";

// Returns all registered dimension ids within Minecraft
const allDimensionTypes = DimensionTypes.getAll();

for (const dimensionType of allDimensionTypes) {
    console.log(`Dimension Type: ${dimensionType}`);
}
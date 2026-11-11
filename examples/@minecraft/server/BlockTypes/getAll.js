import { BlockTypes } from "@minecraft/server";

// Returns a collection of all available block ids.
const allBlockTypes = BlockTypes.getAll();

for (const blockType of allBlockTypes) {
    console.log(`Block Type: ${blockType}`);
}
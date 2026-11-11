import { ItemTypes } from "@minecraft/server";

// Returns all registered item type ids within Minecraft
const allItemTypes = ItemTypes.getAll();

for (const itemType of allItemTypes) {
    console.log(`Item Type: ${itemType}`);
}
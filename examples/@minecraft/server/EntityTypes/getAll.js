import { EntityTypes } from "@minecraft/server";

// Returns all registered entity type ids within Minecraft
const allEntityTypes = EntityTypes.getAll();

for (const entityType of allEntityTypes) {
    console.log(`Entity Type: ${entityType}`);
}
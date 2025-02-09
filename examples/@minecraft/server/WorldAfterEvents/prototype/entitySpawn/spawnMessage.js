import { world } from "@minecraft/server";

// Subscribe to entitySpawn event, so it sends a message when an entity is spawn into a world.
world.afterEvents.entitySpawn.subscribe((event) => {
    const { entity } = event;

    // Sends a message to world.
    world.sendMessage(`${entity.typeId} is spawned`);
});
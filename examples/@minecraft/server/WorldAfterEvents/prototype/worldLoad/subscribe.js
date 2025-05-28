import { world } from "@minecraft/server";

// Subscribe to the worldLoad event, which is triggered when the world is loaded
world.afterEvents.worldLoad.subscribe(() => {
    console.warn("World has been loaded. All operations such as world.getPlayers() can be called.");
});

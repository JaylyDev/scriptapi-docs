// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `worldInitialize` event, which is triggered when the world is initialized
world.afterEvents.worldInitialize.subscribe(() => {
    // Check if the world is in hardcore mode
    const isHardcoreMode = world.getDimension("overworld").isHardcore;

    // Notify players about the current mode
    if (isHardcoreMode) {
        world.sendMessage("Welcome to Hardcore mode! Be careful, as death is permanent.");
    } else {
        world.sendMessage("This world is not in Hardcore mode. Play safely!");
    }
});

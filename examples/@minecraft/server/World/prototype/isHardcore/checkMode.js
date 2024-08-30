// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when the world is initialized
world.afterEvents.playerSpawn.subscribe(() => {
    // Check if the world is in hardcore mode
    // Notify players about the current mode
    if (world.isHardcore) {
        world.sendMessage("Welcome to Hardcore mode! Be careful, as death is permanent.");
    } else {
        world.sendMessage("This world is not in Hardcore mode. Play safely!");
    }
});

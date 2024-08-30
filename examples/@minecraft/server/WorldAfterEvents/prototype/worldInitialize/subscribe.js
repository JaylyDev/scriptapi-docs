// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the worldInitialize event, which is triggered when the world is initialized
world.afterEvents.worldInitialize.subscribe(() => {
    console.warn("World has been initialized");
});

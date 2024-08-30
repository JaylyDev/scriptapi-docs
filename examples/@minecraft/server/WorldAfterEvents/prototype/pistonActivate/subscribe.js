// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `pistonActivate` event, which is triggered when a piston extends or retracts
world.afterEvents.pistonActivate.subscribe(eventData => {
    const { block, isExpanding } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`Piston at ${x}, ${y}, ${z} is ${isExpanding ? "extending" : "retracting"}`);
});

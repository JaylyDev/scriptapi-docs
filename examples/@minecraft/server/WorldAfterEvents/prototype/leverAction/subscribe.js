// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `leverAction` event, which is triggered when a player interacts with a lever
world.afterEvents.leverAction.subscribe(eventData => {
    const { source, block, powered } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`${source.name} toggled a lever at ${x}, ${y}, ${z}. Lever is now ${powered ? "ON" : "OFF"}`);
});

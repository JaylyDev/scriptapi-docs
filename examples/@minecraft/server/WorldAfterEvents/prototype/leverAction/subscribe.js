// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `leverAction` event, which is triggered when a player interacts with a lever
world.afterEvents.leverAction.subscribe(eventData => {
    const { player, block, isPowered } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`${player.name} toggled a lever at ${x}, ${y}, ${z}. Lever is now ${isPowered ? "ON" : "OFF"}`);
});

// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerDimensionChange` event, which is triggered when a player changes dimensions
world.afterEvents.playerDimensionChange.subscribe(eventData => {
    const { player, fromDimension, toDimension } = eventData;
    
    world.sendMessage(`${player.name} moved from ${fromDimension.id} to ${toDimension.id}`);
});

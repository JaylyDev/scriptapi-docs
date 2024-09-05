// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerInteractWithEntity` event, which is triggered when a player interacts with an entity
world.afterEvents.playerInteractWithEntity.subscribe(eventData => {
    const { player, entity } = eventData;
    const { x, y, z } = entity.location;
    
    world.sendMessage(`${player.name} interacted with entity at ${x}, ${y}, ${z}`);
});

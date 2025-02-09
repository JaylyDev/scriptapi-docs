// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerInteractWithEntity` event, which is triggered when a player interacts with an entity
world.afterEvents.playerInteractWithEntity.subscribe(eventData => {
    const { player, target, beforeItemStack, itemStack } = eventData;
    const { x, y, z } = target.location;
    
    if (!itemStack && !beforeItemStack) {
        world.sendMessage(`${player.name} interacted with entity at ${x}, ${y}, ${z}`);
    }
    else {
        world.sendMessage(`${player.name} interacted with entity at ${x}, ${y}, ${z} with ${beforeItemStack.typeId} (now ${itemStack.typeId})`);
    }
});

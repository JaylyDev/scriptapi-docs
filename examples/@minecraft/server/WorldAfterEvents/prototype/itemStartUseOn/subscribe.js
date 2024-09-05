// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `itemStartUseOn` event, which is triggered when a player starts using an item on a block
world.afterEvents.itemStartUseOn.subscribe(eventData => {
    const { source, block, itemStack } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`${source.name} started using item ${itemStack.typeId} on block at ${x}, ${y}, ${z}`);
});

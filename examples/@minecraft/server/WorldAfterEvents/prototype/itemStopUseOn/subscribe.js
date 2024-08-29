// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `itemStopUseOn` event, which is triggered when a player stops using an item on a block
world.afterEvents.itemStopUseOn.subscribe(eventData => {
    const { source, block, itemStack } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`${source.name} stopped using item ${itemStack.typeId} on block at ${x}, ${y}, ${z}`);
});

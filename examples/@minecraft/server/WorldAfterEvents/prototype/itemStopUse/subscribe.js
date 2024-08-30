// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `itemStopUse` event, which is triggered when a player stops using an item
world.afterEvents.itemStopUse.subscribe(eventData => {
    const { source, itemStack } = eventData;
    
    world.sendMessage(`${source.name} stopped using item ${itemStack.typeId}`);
});

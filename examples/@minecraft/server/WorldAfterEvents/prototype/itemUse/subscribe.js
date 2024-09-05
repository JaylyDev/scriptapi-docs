// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `itemUse` event, which is triggered when a player uses an item
world.afterEvents.itemUse.subscribe(eventData => {
    const { source, itemStack } = eventData;
    
    world.sendMessage(`${source.name} used item ${itemStack.typeId}`);
});

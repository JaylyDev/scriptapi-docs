// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `itemReleaseUse` event, which is triggered when a player releases the use of an item
world.afterEvents.itemReleaseUse.subscribe(eventData => {
    const { source, itemStack } = eventData;
    
    world.sendMessage(`${source.name} released the use of item ${itemStack.typeId}`);
});

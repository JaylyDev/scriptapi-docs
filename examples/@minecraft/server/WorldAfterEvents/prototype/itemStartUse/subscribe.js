
import { world } from "@minecraft/server";

// Subscribe to the `itemStartUse` event, which is triggered when a player starts using an item
world.afterEvents.itemStartUse.subscribe(eventData => {
    const { source, itemStack } = eventData;
    
    world.sendMessage(`${source.nameTag} started using item ${itemStack.typeId}`);
});

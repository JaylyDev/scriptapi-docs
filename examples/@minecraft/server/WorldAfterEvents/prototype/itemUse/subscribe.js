import { world } from "@minecraft/server";

// Subscribe to the itemUse event
world.afterEvents.itemUse.subscribe((eventData) => {
    const { source, itemStack } = eventData;
    
    world.sendMessage(`${source.name} used item ${itemStack.typeId}`);
});

import { world } from "@minecraft/server";

world.afterEvents.effectAdd.subscribe((event) => {
    const { effect, entity } = event;
    
    // Send a message about the effect being added
    world.sendMessage(`Effect ${effect.typeId} was added to ${entity.typeId}`);
}, {
    entityTypes: ["minecraft:player"] // Only track effects on players
});
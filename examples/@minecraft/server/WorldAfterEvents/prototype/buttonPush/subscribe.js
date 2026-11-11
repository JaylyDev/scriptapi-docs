import { world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
    const { block, dimension, source } = event;
    
    world.sendMessage(`Button ${block.typeId} pushed by ${source.typeId} in ${dimension.id}`);
});
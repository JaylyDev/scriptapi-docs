import { world } from "@minecraft/server";

world.afterEvents.entityHealthChanged.subscribe((event) => {
    const { entity, oldValue, newValue } = event;
    
    // Only show health changes for players
    if (entity.typeId === "minecraft:player") {
        world.sendMessage(`${entity.nameTag} health changed from ${oldValue} to ${newValue}`);
    }
}, {
    entityTypes: ["minecraft:player"]
});

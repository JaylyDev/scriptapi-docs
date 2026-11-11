import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
    const { id, message, sourceEntity, sourceType } = event;
    
    // Handle script events from entities
    if (sourceEntity && sourceType === "Entity") {
        world.sendMessage(`Script event ${id}: ${message} from ${sourceEntity.typeId}`);
    }
});

// Send a test script event
world.getPlayers().forEach(player => {
    player.runCommand('scriptevent wiki:test Hello World');
});
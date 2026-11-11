
import { Player, world } from "@minecraft/server";

// Subscribe to the `pressurePlatePush` event, which is triggered when a player steps on a pressure plate
world.afterEvents.pressurePlatePush.subscribe(eventData => {
    // Extract the source entity (the player who stepped on the pressure plate) and the block (pressure plate)
    const { source, block } = eventData;
    
    // Extract the x, y, and z coordinates from the block's location
    const { x, y, z } = block.location;
    
    // Format the coordinates as a string
    const coordinates = `${x}, ${y}, ${z}`;
    
    if (source instanceof Player) {
        // If the source is a player, send a message to the world
        world.sendMessage(`${source.name} stepped on a pressure plate at ${coordinates}`);
    }
    else {
        // If the source is not a player, handle accordingly
        world.sendMessage(`${source.typeId} stepped on a pressure plate at ${coordinates}`);
    }
});

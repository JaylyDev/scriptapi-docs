// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `pressurePlatePush` event, which is triggered when a player steps on a pressure plate
world.afterEvents.pressurePlatePush.subscribe(eventData => {
    // Extract the source entity (the player who stepped on the pressure plate) and the block (pressure plate)
    const { source, block } = eventData;
    
    // Extract the x, y, and z coordinates from the block's location
    const { x, y, z } = block.location;
    
    // Format the coordinates as a string
    const coordinates = `${x}, ${y}, ${z}`;
    
    // Construct a message indicating which player stepped on the pressure plate and where
    const message = `${source.name} stepped on a pressure plate at location ${coordinates}`;
    
    // Send the message to all players in the world
    world.sendMessage(message);
});

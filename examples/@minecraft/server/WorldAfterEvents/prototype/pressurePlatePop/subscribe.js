// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `pressurePlatePop` event, which is triggered when a player steps off a pressure plate
world.afterEvents.pressurePlatePop.subscribe(eventData => {
    // Extract the block (pressure plate) that was released
    const { block } = eventData;
    
    // Extract the x, y, and z coordinates from the block's location
    const { x, y, z } = block.location;
    
    // Format the coordinates as a string
    const coordinates = `${x}, ${y}, ${z}`;
    
    // Construct a message indicating that a pressure plate at a specific location was released
    const message = `Pressure plate at location ${coordinates} was released`;
    
    // Send the message to all players in the world
    world.sendMessage(message);
});

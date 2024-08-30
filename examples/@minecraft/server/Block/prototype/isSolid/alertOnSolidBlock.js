// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe(eventData => {
    // Destructure the block object from the event data
    const { block } = eventData;
    
    // Check if the placed block is solid
    if (block.isSolid) {
        // Get the coordinates of the block's location
        let { x, y, z } = block.location;
        
        // Create a string of the coordinates in the format "x, y, z"
        let coordinates = [x, y, z].join(", ");
        
        // Send a message to the world indicating the location of the placed solid block
        world.sendMessage("You placed a solid block at location: " + coordinates);
    }
});


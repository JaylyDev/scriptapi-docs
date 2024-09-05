// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `projectileHitBlock` event, which is triggered when a projectile hits a block
world.afterEvents.projectileHitBlock.subscribe(eventData => {
    // Extract the source entity (the one that shot the projectile)
    const { source } = eventData;
    
    // Retrieve the block that was hit by the projectile
    const hitBlock = eventData.getBlockHit()?.block;
    
    // Check if the hitBlock is valid
    if (hitBlock) {
        // Extract the x, y, and z coordinates from the hitBlock's location
        const { x, y, z } = hitBlock.location;
        
        // Format the coordinates as a string
        const coordinates = `${x}, ${y}, ${z}`;
        
        // Construct a message indicating which player hit which block and where
        const message = `${source.name} hit the block at location ${coordinates}`;
        
        // Send the message to all players in the world
        world.sendMessage(message);
    }
});

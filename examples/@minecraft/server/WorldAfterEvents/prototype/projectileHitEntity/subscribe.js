// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `projectileHitEntity` event, which is triggered when a projectile hits an entity
world.afterEvents.projectileHitEntity.subscribe(eventData => {
    // Destructure the eventData to get the source entity (the one that shot the projectile)
    const { source } = eventData;
    
    // Get the entity that was hit by the projectile
    const hitEntity = eventData.getEntityHit()?.entity;
    
    // Check if the hitEntity is valid
    if (hitEntity) {
        // Extract the x, y, and z coordinates from the hitEntity's location
        const { x, y, z } = hitEntity.location;
        
        // Create a string representing the coordinates in the format "x, y, z"
        const coordinates = `${x}, ${y}, ${z}`;
        
        // Construct a message indicating which player hit which entity and where
        const message = `${source.name} hit the entity at location ${coordinates}`;
        
        // Send the message to all players in the world
        world.sendMessage(message);
        
        // Immediately kill the hit entity
        hitEntity.kill();
    }
});

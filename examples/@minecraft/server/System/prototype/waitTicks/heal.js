// Script by WavePlayz

import { system, world } from "@minecraft/server";

// Subscribe to the entityHurt event, which triggers whenever an entity takes damage
world.afterEvents.entityHurt.subscribe(async eventData => {
    // Extract the hurt entity and damage amount from the event data
    const { hurtEntity, damage } = eventData;
    
    // Wait for a number of game ticks equal to the damage value before proceeding
    await system.waitTick(damage);
    
    // Attempt to get the health component of the hurt entity
    const health = hurtEntity.getComponent("health");
    
    // If the entity has a health component, reset its health to the maximum value
    if (health != null) {
        health.resetToMaxValue();  // Reset the entity's health to full
        
        // Send a message to the entity (if it supports receiving messages)
        hurtEntity.sendMessage?.("Health reset");
    }
});

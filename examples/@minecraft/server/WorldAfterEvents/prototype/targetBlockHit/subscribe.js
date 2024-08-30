// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `targetBlockHit` event, which is triggered when a player hits a block
world.afterEvents.targetBlockHit.subscribe(eventData => {
    // Destructure the `eventData` to get the source entity (player) and hit location
    const { source, hitVector } = eventData;
    
    // Extract the x, y, and z coordinates from the hitVector
    const { x, y, z } = hitVector;
    
    // Create a string representing the coordinates in the format "x, y, z"
    const coordinates = `${x}, ${y}, ${z}`;
    
    // Construct a message indicating which player hit the block and where
    const message = `${source.name} hit a target block at ${coordinates}`;
    
    // Send the message to all players in the world
    world.sendMessage(message);
});

/*
  Explanation:
  This script listens for the `targetBlockHit` event, which occurs whenever a player hits a block.
  When the event is triggered:
    - It retrieves the player who hit the block (`source`) and the location where the block was hit (`hitVector`).
    - It formats the location coordinates and constructs a message with the player's name and coordinates.
    - It then sends this message to all players in the world, so everyone knows who hit a block and where.
*/

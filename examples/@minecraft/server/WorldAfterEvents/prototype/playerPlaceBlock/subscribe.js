// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerPlaceBlock` event, which is triggered when a player places a block
world.afterEvents.playerPlaceBlock.subscribe(eventData => {
    // Destructure the eventData to get the player who placed the block and the block itself
    const { player, block } = eventData;
    
    // Extract the x, y, and z coordinates from the block's location
    const { x, y, z } = block.location;
    
    // Format the coordinates as a string
    const coordinates = `${x}, ${y}, ${z}`;
    
    // Construct a message indicating which player placed which block and where
    const message = `${player.name} placed ${block.typeId} at location ${coordinates}`;
    
    // Send the message to all players in the world
    world.sendMessage(message);
});

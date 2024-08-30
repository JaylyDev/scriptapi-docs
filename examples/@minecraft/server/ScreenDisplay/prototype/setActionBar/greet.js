// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe(eventData => {
    // Extract the player and block objects from the event data
    const { player, block } = eventData;
    
    // Display a message on the player's action bar indicating the type of block they placed
    player.onScreenDisplay.setActionBar(`You placed ${block.typeId}`);
    
});

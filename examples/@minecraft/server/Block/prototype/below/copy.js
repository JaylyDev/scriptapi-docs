// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe(eventData => {
    // Extract the player and block objects from the event data
    const { player, block } = eventData;
    
    // Get the block that is directly below the block that was just placed
    const blockBelowThePlacedBlock = block.below(1);
    
    // Get the type of the block that is below the placed block
    const blockBelowThePlacedBlockType = blockBelowThePlacedBlock.type;
    
    // Set the type of the newly placed block to be the same as the block below it
    block.setType(blockBelowThePlacedBlockType);
});

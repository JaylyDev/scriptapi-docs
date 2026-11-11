import { world } from "@minecraft/server"; 

// Subscribe to player place block event
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
    const { player, block } = eventData;
    
    // Get the block below the placed block
    const blockBelow = block.below(1);
    
    // Copy the type of the block below to the placed block
    block.setType(blockBelow.type);
});

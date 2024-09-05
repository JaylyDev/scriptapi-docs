// Script by WavePlayz

import { world, BlockTypes } from "@minecraft/server"; 

// Get all available block types in the game
const blockTypes = BlockTypes.getAll();

// Function to get a random block type from the list of block types
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe(eventData => {
    // Destructure the player and block objects from the event data
    const { player, block } = eventData;
    
    // Get a random block type
    const randomBlockType = getRandomBlockType();
    
    // Send a message to the player indicating the type of block they placed
    player.sendMessage("You placed the " + randomBlockType.id + " block, xD");
    
    // Change the type of the placed block to the random block type
    block.setType(randomBlockType);
});

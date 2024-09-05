// Script by WavePlayz

import { world, system, BlockTypes } from "@minecraft/server"; 

// Get all available block types in the game
const blockTypes = BlockTypes.getAll();

// Function to get a random block type from the list of block types
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to the event that triggers when a piston is activated
world.afterEvents.pistonActivate.subscribe(eventData => {
    // Destructure the dimension and piston objects from the event data
    const { dimension, piston } = eventData;
    
    // Get the blocks attached to the piston
    const attachedBlocks = piston.getAttachedBlocks();
    
    // Get the locations of the blocks attached to the piston
    const attachedBlocksLocations = piston.getAttachedBlocksLocations();
    
    // Loop through each attached block location
    attachedBlocksLocations.forEach((location, index) => {
        // Set the type of each attached block to a random block type
        attachedBlocks[index].setType(getRandomBlockType());
    });
    
});

// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Function to check if a given block is red wool
function isRedWool(block) {
    // Define the type id of block we are checking for
    let typeId = "wool";
    
    // Define the block state we are looking for
    // In this case, we want the color to be red
    let states = { color: "red" };
    
    // Check if the block matches the specified type and states
    // The 'matches' method returns true if the block is of the specified type and has the specified states
    return block.matches( typeId, states );
}




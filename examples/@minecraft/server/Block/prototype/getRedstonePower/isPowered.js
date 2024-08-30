// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Function to check if a given block is powered by redstone
function isBlockPowered(block) {
    // Get the redstone power level of the block
    // The 'getRedstonePower' method returns a number representing the power level
    // If the power level is greater than 0, it means the block is powered
    return block.getRedstonePower() > 0;
}


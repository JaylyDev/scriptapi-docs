import { BlockPermutation, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

// This example demonstrates how to work with pistons and their attached blocks
// We'll create a simple piston setup and check what blocks are attached to it

const overworld = world.getDimension('overworld');

// Step 1: Create a piston at position (0, 64, 0)
const pistonLocation = { x: 0, y: 64, z: 0 };
const pistonBlock = overworld.getBlock(pistonLocation);
pistonBlock.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston));

// Step 2: Place some blocks in front of the piston that it can push
// Let's place a few dirt blocks in front of the piston
const blockPositions = [
    { x: 0, y: 64, z: 1 },  // Directly in front
    { x: 0, y: 64, z: 2 },  // One block further
    { x: 0, y: 64, z: 3 }   // Two blocks further
];

blockPositions.forEach(pos => {
    const block = overworld.getBlock(pos);
    block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Dirt));
});

// Step 3: Get the piston component and check its properties
const pistonComponent = pistonBlock.getComponent("piston");

if (pistonComponent) {
    console.log("Piston component found!");
    
    // Get the blocks that would be affected if this piston extends
    const attachedBlocks = pistonComponent.getAttachedBlocks();
    
    console.log("Number of attached blocks:", attachedBlocks.length);
    
    // Display information about each attached block
    attachedBlocks.forEach((block, index) => {
        console.log(`Attached block ${index + 1}:`);
        console.log(`  - Location: (${block.location.x}, ${block.location.y}, ${block.location.z})`);
        console.log(`  - Type: ${block.typeId}`);
    });
    
    // You can also check if the piston can be activated
    // Note: This would require redstone power in an actual game scenario
    console.log("Piston state information logged to console.");
} else {
    console.log("Failed to get piston component - make sure the block is actually a piston!");
}

// Bonus: Listen for piston activation events in the world
// This is more useful for real gameplay scenarios
world.afterEvents.pistonActivate.subscribe(eventData => {
    const { dimension, piston, isExpanding } = eventData;
    
    console.log(`Piston ${isExpanding ? 'extending' : 'retracting'} detected!`);
    
    // The 'piston' here is already the BlockPistonComponent
    // We can directly use its methods
    const attachedBlocks = piston.getAttachedBlocks();
    console.log(`This piston is moving ${attachedBlocks.length} blocks`);
    
    // Log details about each block being moved
    attachedBlocks.forEach((block, index) => {
        console.log(`  Block ${index + 1}: ${block.typeId} at (${block.location.x}, ${block.location.y}, ${block.location.z})`);
    });
});
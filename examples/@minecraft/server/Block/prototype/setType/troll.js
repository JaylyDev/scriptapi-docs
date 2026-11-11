import { world, BlockTypes } from "@minecraft/server"; 

// Get all available block types
const blockTypes = BlockTypes.getAll();

// Function to get a random block type
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to player place block event
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
    const { player, block } = eventData;
    const randomBlockType = getRandomBlockType();
    
    player.sendMessage(`You placed a ${randomBlockType.id} block!`);
    block.setType(randomBlockType);
});

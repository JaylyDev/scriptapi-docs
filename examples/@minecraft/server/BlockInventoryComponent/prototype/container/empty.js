// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Subscribe to the event that triggers when a player interacts with a block
world.afterEvents.playerInteractWithBlock.subscribe(eventData => {
    // Extract the player and block objects from the event data
    const { player, block } = eventData;
    
    // Get the inventory component of the block
    let inventoryComponent = block.getComponent("inventory");
    
    // Check if the block has an inventory component
    if (inventoryComponent == null) {
        // Send a message to the player if the block does not have an inventory
        player.sendMessage(`The block does not have an inventory component.`);
        return; // Exit the function early
    }
    
    // Get the inventory container from the inventory component
    const inventoryContainer = inventoryComponent.container;

    // Destructure the empty slots count and total size from the inventory container
    let { emptySlotsCount, size } = inventoryContainer;

    // Send a message to the player with the number of free slots in the inventory
    player.sendMessage(`${emptySlotsCount} out of ${size} slots are free.`);
    
});

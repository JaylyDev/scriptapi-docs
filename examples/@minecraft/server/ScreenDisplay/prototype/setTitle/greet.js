// Script by WavePlayz

import { world } from "@minecraft/server"; 

// Function to convert seconds to ticks (1 second = 20 ticks in Minecraft)
let secsToTicks = (/** @type {number} */ secs) => secs * 20;

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe(eventData => {
    // Extract the player and block objects from the event data
    const { player, block } = eventData;
    
    // Define display options for the title message
    let displayOptions = {
        fadeInDuration: secsToTicks(0.5),  // Duration for the title to fade in
        fadeOutDuration: secsToTicks(1),   // Duration for the title to fade out
        stayDuration: secsToTicks(1.5),    // Duration for the title to stay on screen
        subtitle: player.name               // Subtitle showing the player's name
    };
    
    // Set the title message to display when a block is placed
    player.onScreenDisplay.setTitle(`You placed \n ${block.typeId}`, displayOptions);
    
});

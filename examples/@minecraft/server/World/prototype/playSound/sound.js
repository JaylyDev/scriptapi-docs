// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `itemUseOn` event, which is triggered when a player uses an item on a block
world.afterEvents.itemUseOn.subscribe(eventData => {
    const player = eventData.source;

    // Play a sound effect when the player uses an item on a block
    player.playSound("minecraft:block.anvil.use", {
        volume: 0.8,  // Volume level of the sound (1.0 is normal)
        pitch: 1.2,   // Pitch of the sound (1.0 is normal)
        location: player.location // Position where the sound should be played
    });

    player.sendMessage("You used an item on a block. Sound played!");
});

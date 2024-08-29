// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerInteractWithBlock` event, which is triggered when a player interacts with a block
world.afterEvents.playerInteractWithBlock.subscribe(eventData => {
    const { player, block } = eventData;
    const { x, y, z } = block.location;
    
    world.sendMessage(`${player.name} interacted with block at ${x}, ${y}, ${z}`);
});

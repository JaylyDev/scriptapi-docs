// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerInputPermissionCategoryChange` event, which is triggered when a player's input permissions change
world.afterEvents.playerInputPermissionCategoryChange.subscribe(eventData => {
    const { player, oldCategory, newCategory } = eventData;
    
    world.sendMessage(`${player.name} input permission category changed from ${oldCategory} to ${newCategory}`);
});

// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerInputPermissionCategoryChange` event, which is triggered when a player's input permissions change
world.afterEvents.playerInputPermissionCategoryChange.subscribe(eventData => {
    const { player, category, enabled } = eventData;
    
    world.sendMessage(`${player.name} ${enabled ? "enabled" : "disabled"} input permission category ${category}`);
});

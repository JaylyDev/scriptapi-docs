// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerGameModeChange` event, which is triggered when a player changes their game mode
world.afterEvents.playerGameModeChange.subscribe(eventData => {
    const { player, newGameMode } = eventData;
    
    world.sendMessage(`${player.name} changed game mode to ${newGameMode}`);
});

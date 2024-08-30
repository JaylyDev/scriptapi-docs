// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe(eventData => {
	// ignore if player respawns
	if (! eventData.initialSpawn ) return;
	
    const player = eventData.player;

    // Construct a welcome message for the player who just joined
    const welcomeMessage = `Welcome ${player.name}! Have fun in the world of Minecraft!`;

    // Use world.sendMessage to broadcast the message to all players in the world
    world.sendMessage(welcomeMessage);
    
    // Notify the player specifically with a different message
    player.sendMessage("Feel free to explore and build your adventure!");
});

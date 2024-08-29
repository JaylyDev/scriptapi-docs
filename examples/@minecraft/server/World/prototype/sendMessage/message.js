// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerJoin` event, which is triggered when a player joins the world
world.afterEvents.playerJoin.subscribe(eventData => {
    const player = eventData.player;

    // Construct a welcome message for the player who just joined
    const welcomeMessage = `Welcome ${player.name}! Have fun in the world of Minecraft!`;

    // Use world.sendMessage to broadcast the message to all players in the world
    world.sendMessage(welcomeMessage);
    
    // Notify the player specifically with a different message
    player.sendMessage("Feel free to explore and build your adventure!");
});

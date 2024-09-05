// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerJoin` event, which is triggered when a player joins the world
world.afterEvents.playerJoin.subscribe(eventData => {
    const player = eventData.player;

    // Play a music track for the player when they join the world
    player.playMusic("minecraft:music.game", {
        volume: 1.0,  // Volume level of the music (1.0 is normal)
        fade: 0.5,    // Fade in/out time in seconds
    });

    player.sendMessage("Welcome! Enjoy the music while you play.");
});

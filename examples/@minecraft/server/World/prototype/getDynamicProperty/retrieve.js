// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerJoin` event, which is triggered when a player joins the world
world.afterEvents.playerJoin.subscribe(eventData => {
    // Extract the player entity from the event data
    const player = eventData.player;
    
    // Attempt to retrieve a custom dynamic property 
    const playersCount = world.getDynamicProperty("playersCount");
    
    // If the property doesn't exist
    playersCount ??= 0

    // set a default value 
    player.setDynamicProperty("playersCount", playersCount + 1 );
});

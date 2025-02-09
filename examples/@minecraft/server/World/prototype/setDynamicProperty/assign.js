// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe(eventData => {
    // Extract the player entity from the event data
    const player = eventData.player;
    
    // Attempt to retrieve a custom dynamic property 
    let playersCount = world.getDynamicProperty("playersCount");
    
    // If the property doesn't exist
    playersCount ??= 0

    // set a default value 
    // @ts-ignore assuming playersCount is a number
    player.setDynamicProperty("playersCount", playersCount + 1 );
});

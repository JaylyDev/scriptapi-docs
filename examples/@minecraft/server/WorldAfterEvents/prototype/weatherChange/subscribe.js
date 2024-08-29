// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the weatherChange event, which is triggered when the weather changes in the world
world.afterEvents.weatherChange.subscribe(eventData => {
    const { dimension, previousWeather, newWeather } = eventData;
    
    // Send a message to all players indicating the weather change details
    world.sendMessage(`Weather changed from ${previousWeather} to ${newWeather} in dimension ${dimension}`);
});

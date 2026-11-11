import { world } from "@minecraft/server";

// Subscribe to the weatherChange event
world.afterEvents.weatherChange.subscribe((eventData) => {
    const { dimension, previousWeather, newWeather } = eventData;
    
    world.sendMessage(`Weather changed from ${previousWeather} to ${newWeather} in ${dimension}`);
});

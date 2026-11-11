
import { world } from "@minecraft/server";

// Subscribe to the `playerSpawn` event, which is triggered when a player joins the world
world.afterEvents.playerSpawn.subscribe(eventData => {
    // Extract the player entity from the event data
    const player = eventData.player;

    // Attempt to retrieve a custom dynamic property
    const playersCount = world.getDynamicProperty("playersCount");

    if (typeof playersCount !== "number") {
        // If the property doesn't exist, set a default value
        player.setDynamicProperty("playersCount", 1);
    } else {
        // If the property exists, increment its value
        player.setDynamicProperty("playersCount", playersCount + 1);
    }
});

// Script by WavePlayz

import { system, world } from "@minecraft/server";

// Subscribe to the entityRemove event, which is triggered when an entity is removed from the world
world.afterEvents.entityRemove.subscribe(eventData => {
    // Extract the type ID of the removed entity from the event data
    const { typeId } = eventData;

    // Send a message to all players in the world indicating that an entity of the given type has been removed
    world.sendMessage(`Entity ${typeId} got removed`);
});

/*
  Explanation:
  This script listens for the `entityRemove` event, which occurs when an entity is removed from the Minecraft world.

  - **Event Subscription**: 
    The `world.afterEvents.entityRemove.subscribe` method registers a callback function to handle the event whenever an entity is removed.

  - **Extracting Entity Type**:
    The `typeId` property from the `eventData` object contains the identifier of the removed entity's type.

  - **Sending a Message**:
    The script constructs a message indicating which type of entity was removed and sends this message to all players in the world using `world.sendMessage`.

  Usage:
  When an entity is removed (e.g., due to despawning, being killed, or otherwise removed), this script will automatically notify all players in the game with a message stating the type of the removed entity.
*/

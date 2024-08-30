// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the itemCompleteUse event, which is triggered when a player completes using an item
world.afterEvents.itemCompleteUse.subscribe(eventData => {
    // Extract the player who used the item and the item stack from the event data
    const { source, itemStack } = eventData;

    // Construct a message indicating the player's name and the type of item they used
    world.sendMessage(`Player ${source.name} completed use of item (${itemStack.typeId})`);
});

/*
  Explanation:
  This script listens for the `itemCompleteUse` event, which occurs when a player finishes using an item in Minecraft.

  - **Event Subscription**:
    The `world.afterEvents.itemCompleteUse.subscribe` method registers a callback function to handle the event whenever an item use is completed.

  - **Extracting Information**:
    - `source` represents the player who used the item.
    - `itemStack` provides details about the item stack, including its type ID.

  - **Sending Notification**:
    - The script constructs a message that includes the player's name and the type ID of the item they used. This message is then sent to all players in the world using `world.sendMessage`.

  Usage:
  When a player completes using an item (such as consuming a potion or using a tool), this script sends a notification to all players in the game, indicating which player used which item. This can be useful for tracking item usage or for general game management.
*/

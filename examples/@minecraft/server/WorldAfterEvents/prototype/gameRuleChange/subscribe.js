// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the gameRuleChange event, which is triggered when a game rule is updated
world.afterEvents.gameRuleChange.subscribe(eventData => {
    // Extract the game rule name and its new value from the event data
    const { rule, value } = eventData;
    
    // Send a message to all players in the world indicating that a game rule has been updated
    world.sendMessage(`Gamerule ${rule} updated to ${value}`);
});

/*
  Explanation:
  This script listens for the `gameRuleChange` event, which occurs when a game rule is modified in Minecraft.

  - **Event Subscription**:
    The `world.afterEvents.gameRuleChange.subscribe` method registers a callback function to handle the event whenever a game rule changes.

  - **Extracting Information**:
    - `rule` provides the name of the game rule that was changed.
    - `value` indicates the new value of the game rule.

  - **Sending Notification**:
    - The script constructs a message that includes the name of the updated game rule and its new value, then sends this message to all players in the world using `world.sendMessage`.

  Usage:
  When a game rule is changed, this script automatically notifies all players with a message that includes the name of the updated game rule and its new value. This is useful for tracking changes to game rules and keeping players informed about the current game settings.
*/

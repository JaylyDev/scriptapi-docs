// Script by WavePlayz

import { world, DisplaySlotId } from "@minecraft/server";

// Access the scoreboard object from the world
const { scoreboard } = world;

// Set the display slot below players' names to show scores from "Objective1"
scoreboard.setObjectiveAtDisplaySlot(
    DisplaySlotId.BelowName, 
    {
        objective: scoreboard.getObjective("Objective1") // Reference to the "Objective1" objective
    }
);

// Set the display slot in the player list to show scores from "Objective2"
scoreboard.setObjectiveAtDisplaySlot(
    DisplaySlotId.List, 
    {
        objective: scoreboard.getObjective("Objective2") // Reference to the "Objective2" objective
    }
);

// Set the sidebar display slot to show scores from "Objective3"
scoreboard.setObjectiveAtDisplaySlot(
    DisplaySlotId.Sidebar, 
    {
        objective: scoreboard.getObjective("Objective3") // Reference to the "Objective3" objective
    }
);

/*
  Explanation:
  This script assigns different scoreboard objectives to specific display slots in Minecraft:
  
  1. **BelowName Display Slot**: The `BelowName` slot is used to show scores beneath players' names. Here, scores from the "Objective1" objective are displayed below the names of all players in the game.

  2. **List Display Slot**: The `List` slot displays scores next to players' names in the player list (the tab menu). This script sets it to show scores from the "Objective2" objective.

  3. **Sidebar Display Slot**: The `Sidebar` slot displays scores on the right side of the screen for all players. This script assigns the "Objective3" objective to this slot.

  Usage:
  Make sure that "Objective1", "Objective2", and "Objective3" exist as objectives in your scoreboard. You can create these objectives using Minecraft commands, for example:
  
  /scoreboard objectives add Objective1 dummy "Objective 1"
  /scoreboard objectives add Objective2 dummy "Objective 2"
  /scoreboard objectives add Objective3 dummy "Objective 3"
  
  After running this script, the scores for these objectives will be displayed in the appropriate slots for all players in the game.
*/

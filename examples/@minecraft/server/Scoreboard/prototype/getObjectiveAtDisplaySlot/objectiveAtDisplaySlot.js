// Script by WavePlayz

import { world, DisplaySlotId } from "@minecraft/server";

// Access the scoreboard object from the world
const { scoreboard } = world;

// Retrieve the objective currently displayed below players' names
let objectiveBelowName = scoreboard.getObjectiveAtDisplaySlot(
    DisplaySlotId.BelowName
);

// Retrieve the objective currently displayed in the player list (tab menu)
let objectiveList = scoreboard.getObjectiveAtDisplaySlot(
    DisplaySlotId.List
);

// Retrieve the objective currently displayed in the sidebar on the right side of the screen
let objectiveSideBar = scoreboard.getObjectiveAtDisplaySlot(
    DisplaySlotId.Sidebar
);

/*
  Explanation:
  This script retrieves and stores the current scoreboard objectives that are displayed in different areas of the Minecraft UI:
  
  1. **BelowName Slot**: 
     - `objectiveBelowName` holds the objective that is currently shown below players' names in the game world.
  
  2. **List Slot**:
     - `objectiveList` holds the objective that is currently shown next to players' names in the player list (the tab menu).
  
  3. **Sidebar Slot**:
     - `objectiveSideBar` holds the objective that is currently shown in the sidebar on the right side of the screen.

  Usage:
  This script is useful for checking which scoreboard objectives are currently assigned to each display slot. You can use these variables to reference or modify the displayed objectives as needed. For example, you might want to compare or switch objectives based on game events or conditions.
*/

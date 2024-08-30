// Script by WavePlayz

import { world, DisplaySlotId } from "@minecraft/server";

// Access the scoreboard object from the world
const { scoreboard } = world;

// Clear the objective currently displayed below players' names
scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.BelowName);

// Clear the objective currently displayed in the player list (tab menu)
scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.List);

// Clear the objective currently displayed in the sidebar on the right side of the screen
scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar);

/*
  Explanation:
  This script clears the scoreboard objectives displayed in different areas of the Minecraft UI:
  
  1. **BelowName Slot**: 
     - The `clearObjectiveAtDisplaySlot(DisplaySlotId.BelowName)` method removes the objective currently shown below players' names in the game world.
  
  2. **List Slot**:
     - The `clearObjectiveAtDisplaySlot(DisplaySlotId.List)` method removes the objective currently shown next to players' names in the player list (the tab menu).
  
  3. **Sidebar Slot**:
     - The `clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar)` method removes the objective currently shown in the sidebar on the right side of the screen.

  Usage:
  Use this script when you want to remove scoreboard objectives from the display slots without replacing them with new objectives. This can be useful for resetting the UI, cleaning up old objectives, or preparing to display new ones.

  Note:
  Clearing an objective from a display slot does not delete the objective from the scoreboard; it simply removes it from that specific display slot.
*/

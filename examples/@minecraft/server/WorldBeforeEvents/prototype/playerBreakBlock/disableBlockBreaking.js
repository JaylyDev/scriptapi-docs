import { world } from "@minecraft/server";

// Disable the ability of a player from breaking a block.
world.beforeEvents.playerBreakBlock.subscribe((event) => {
  event.cancel = true;
  event.player.sendMessage("You can't break blocks!");
});
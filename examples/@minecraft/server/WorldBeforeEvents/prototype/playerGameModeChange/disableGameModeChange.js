import { world } from "@minecraft/server";

// Disable the ability of any players without admin tag from changing gamemode.
world.beforeEvents.playerGameModeChange.subscribe((event) => {
  if (!event.player.hasTag("admin")) {
    event.cancel = true;
    event.player.sendMessage("You can't change gamemode!");
  }
});
import { world } from "@minecraft/server";

// Show platform type to every player
function showPlatformType() {
  for (const player of world.getPlayers()) {
    player.sendMessage("You're playing Minecraft on a " + player.clientSystemInfo.platformType);
  }
}
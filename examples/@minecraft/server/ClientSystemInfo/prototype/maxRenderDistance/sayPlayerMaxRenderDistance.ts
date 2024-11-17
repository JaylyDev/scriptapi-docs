import { world } from "@minecraft/server";

// Show the maximum render distance every online player
function displayMaxRenderDistance() {
  for (const player of world.getPlayers()) {
    player.sendMessage('Your maximum render distance: ' + player.clientSystemInfo.maxRenderDistance + ' chunks');
  }
}
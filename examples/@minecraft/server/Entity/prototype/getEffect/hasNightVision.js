import { Player, world } from "@minecraft/server";

/**
 * @param {Player} player 
 */
function hasNightVision(player) {
  const nightVision = player.getEffect("night_vision");
  if (nightVision) {
    return true;
  }
  else return false;
}

for (const player of world.getAllPlayers()) {
  if (hasNightVision(player)) {
    player.sendMessage('You have night vision.');
  }
  else {
    player.sendMessage("You don't have night vision.");
  }
}
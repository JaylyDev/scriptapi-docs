import { world } from "@minecraft/server";

for (const player of world.getPlayers()) {
  player.sendMessage('Your maximum render distance: ' + player.clientSystemInfo.maxRenderDistance + ' chunks');
}
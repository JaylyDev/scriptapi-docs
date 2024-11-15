import { world } from "@minecraft/server";

for (const player of world.getPlayers()) {
  player.sendMessage("You're playing Minecraft on a " + player.clientSystemInfo.platformType);
}
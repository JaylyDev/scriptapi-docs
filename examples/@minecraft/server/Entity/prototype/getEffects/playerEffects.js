import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  for (const effect of player.getEffects()) {
    player.sendMessage(`Effect: ${effect.displayName} | Duration: ${effect.duration} | Amplifier: ${effect.amplifier}`);
  }
}
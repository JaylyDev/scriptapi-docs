import { GameMode, system, world } from "@minecraft/server";
system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    const isSpectating = player.matches({ gameMode: GameMode.Spectator });
    if (isSpectating) {
      player.onScreenDisplay.setActionBar("You are spectating")
    }
  }
})
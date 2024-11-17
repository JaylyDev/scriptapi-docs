import { Player, world } from "@minecraft/server";

world.beforeEvents.effectAdd.subscribe((event) => {
  if (event.entity instanceof Player) {
    // Cancel any effects that apply to players.
    event.cancel = true;

    // Message player that effect is not added
    event.entity.sendMessage("You can't get the following effect:");
    // For some reason, the effect type is translated based on server's language.
    event.entity.sendMessage('Effect Type: ' + event.effectType);
    event.entity.sendMessage('Effect Duration: ' + event.duration);
  }
})
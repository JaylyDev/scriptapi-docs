import { Player, world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
  if (event.source instanceof Player) {
    const { x, y, z } = event.source.location;
    event.source.sendMessage(`Your location: ${x}, ${y}, ${z}`);
  }
})
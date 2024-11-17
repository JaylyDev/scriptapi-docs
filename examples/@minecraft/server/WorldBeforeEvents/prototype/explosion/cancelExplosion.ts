import { world } from "@minecraft/server";

world.beforeEvents.explosion.subscribe((data) => {
  world.sendMessage('Explosion at ' + data.dimension.id + ' dimension.');
  data.cancel = true;
})
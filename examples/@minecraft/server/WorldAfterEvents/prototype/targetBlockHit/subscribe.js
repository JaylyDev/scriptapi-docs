import { Player, world } from "@minecraft/server";

// Subscribe to the targetBlockHit event
world.afterEvents.targetBlockHit.subscribe((eventData) => {
  const { source, hitVector } = eventData;
  const { x, y, z } = hitVector;

  if (source instanceof Player) {
    world.sendMessage(
      `${source.name} hit a target block at ${x.toFixed(1)}, ${y.toFixed(1)}, ${z.toFixed(1)}`
    );
  }
});

import { world } from "@minecraft/server";

// Subscribe to entityRemove event
world.beforeEvents.entityRemove.subscribe((data) => {
  world.sendMessage('Entity Removed: ' + data.removedEntity.typeId);
  // Spawn lightning when an entity is removed.
  data.removedEntity.runCommand('summon lightning_bolt ~ ~10 ~');
})
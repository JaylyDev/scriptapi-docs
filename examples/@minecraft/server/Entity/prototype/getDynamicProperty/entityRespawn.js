import { system, world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe((event) => {
  event.entity.setDynamicProperty('spawn_location', event.entity.location); // set location spawn
});

world.beforeEvents.entityRemove.subscribe((event) => {
  /** @type {import("@minecraft/server").Vector3} */
  // @ts-ignore
  const location = event.removedEntity.getDynamicProperty('spawn_location'); // get location spawn
  system.run(() => {
    event.removedEntity.dimension.spawnEntity(event.removedEntity.typeId, location);
  })
});
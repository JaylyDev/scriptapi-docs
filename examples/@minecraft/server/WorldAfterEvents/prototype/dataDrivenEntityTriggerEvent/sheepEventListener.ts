import { world, system, Entity } from "@minecraft/server";

const eventId = "minecraft:entity_spawned"

system.runInterval(() => {
  for (let player of world.getAllPlayers()) {
    let [entityRaycaseHit] = player.getEntitiesFromViewDirection({ maxDistance: 150 });
    if (!entityRaycaseHit) continue;
    let entity = entityRaycaseHit.entity;

    if (entity?.typeId === "minecraft:sheep") {
      listenTo(entity);
      entity.triggerEvent(eventId)
    }
  }
});

function listenTo(entity: Entity) {
  const callback = world.afterEvents.dataDrivenEntityTriggerEvent.subscribe((data) => {
    world.afterEvents.dataDrivenEntityTriggerEvent.unsubscribe(callback);

    data.getModifiers().forEach((modifier) => {
      console.log('ComponentGroupsToAdd:', modifier.getComponentGroupsToAdd());
      console.log('ComponentGroupsToRemove:', modifier.getComponentGroupsToRemove());
      console.log('Triggers:', modifier.getTriggers());
    });
  }, { entities: [entity], eventTypes: [eventId] });
};
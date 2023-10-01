// Subscribe to the EntityLoadAfterEvent
const entityLoadSubscription = world.afterEvents.entityLoad.subscribe((event: EntityLoadAfterEvent) => {
  // Handle the entity load event
  console.log(`Entity loaded: ${event.entity.typeId}`);
});

// ... Later in your code, when you want to unsubscribe
world.afterEvents.entityLoad.unsubscribe(entityLoadSubscription);

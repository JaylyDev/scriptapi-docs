system.runInterval(() => {
  const entity = world.getEntity('unique_id');
  if (entity.isSneaking) {
    // force entity not to sneak
    entity.isSneaking = false;
  }
})
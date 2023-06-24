world.afterEvents.entityHit.subscribe((event) => {
  const location1 = event.entity.location;
  const location2 = event.hitEntity.location;

  const distance = Math.pow(
    Math.pow(location2.x - location1.x, 2) +
    Math.pow(location2.y - location1.y, 2) +
    Math.pow(location2.z - location1.z, 2),
    0.5
  );

  console.log('Distance: ' + distance + ' blocks');
});
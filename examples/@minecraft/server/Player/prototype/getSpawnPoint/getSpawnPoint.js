const spawnPoint = player.getSpawnPoint();
if (spawnPoint) {
  console.log(`Spawn point location: ${spawnPoint.x} ${spawnPoint.y} ${spawnPoint.z} at ${spawnPoint.dimension.id}`);
} else {
  console.log(`No spawn point set.`);
}
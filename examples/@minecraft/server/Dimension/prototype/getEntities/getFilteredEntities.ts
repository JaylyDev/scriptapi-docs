const entityQueryOptions: EntityQueryOptions = {
  families: ["mob", "animal"],
  excludeTypes: ["cow"],
  maxDistance: 50,
  excludeGameModes: [GameMode.Creative, GameMode.Spectator],
};

const filteredEntities = world.getDimension("overworld").getEntities(entityQueryOptions);
console.log("Filtered Entities:", filteredEntities.map(entity => entity.typeId));

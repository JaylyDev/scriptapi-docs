import { DimensionTypes, world } from "@minecraft/server";

const dimensions = DimensionTypes.getAll();
for (const dimensionType of dimensions) {
  world.sendMessage(dimensionType.typeId);
}

// minecraft:overworld
// minecraft:nether
// minecraft:the_end
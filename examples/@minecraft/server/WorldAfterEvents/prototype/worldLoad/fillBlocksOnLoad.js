import { BlockVolume, world } from "@minecraft/server";

// Runs when world is first loaded.
// Everything inside this callback bypasses the early-execution mode
world.afterEvents.worldLoad.subscribe(() => {
    const overworld = world.getDimension("overworld");
    const volume = new BlockVolume({ x: 10, y: 0, z: 0 }, { x: 0, y: 10, z: 0 });
    overworld.fillBlocks(volume, "minecraft:stone");
});
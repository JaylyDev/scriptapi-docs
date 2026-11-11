import { system, world } from "@minecraft/server";

system.run(() => {
    const spider = world.getDimension("overworld").spawnEntity("minecraft:spider", { x: 0, y: 0, z: 0 });
    const navigationClimb = spider.getComponent("minecraft:navigation.climb");
    
    if (!navigationClimb) {
        world.sendMessage("Spider navigation climb component not found");
        return;
    }

    // Display navigation properties
    world.sendMessage(`Spider Navigation Properties:`);
    world.sendMessage(`- Can climb: ${navigationClimb.canPathFromAir}`);
    world.sendMessage(`- Avoid water: ${navigationClimb.avoidWater}`);
    world.sendMessage(`- Can jump: ${navigationClimb.canJump}`);
    world.sendMessage(`- Can swim: ${navigationClimb.canSwim}`);
});
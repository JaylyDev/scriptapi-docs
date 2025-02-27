import { system, world } from "@minecraft/server";

system.run(() => {
    const spider = world.getDimension("overworld").spawnEntity("minecraft:spider", { x: 0, y: 0, z: 0 });
    const navigationClimb = spider.getComponent("minecraft:navigation.climb");
    if (!navigationClimb) return console.warn('spider - navigationClimb is undefined');

    console.warn('spider - avoidDamageBlocks: ' + navigationClimb.avoidDamageBlocks);
    console.warn('spider - avoidPortals: ' + navigationClimb.avoidPortals);
    console.warn('spider - avoidSun: ' + navigationClimb.avoidSun);
    console.warn('spider - avoidWater: ' + navigationClimb.avoidWater);
    console.warn('spider - canBreach: ' + navigationClimb.canBreach);
    console.warn('spider - canBreakDoors: ' + navigationClimb.canBreakDoors);
    console.warn('spider - canFloat: ' + navigationClimb.canFloat);
    console.warn('spider - canJump: ' + navigationClimb.canJump);
    console.warn('spider - canOpenDoors: ' + navigationClimb.canOpenDoors);
    console.warn('spider - canOpenIronDoors: ' + navigationClimb.canOpenIronDoors);
    console.warn('spider - canPassDoors: ' + navigationClimb.canPassDoors);
    console.warn('spider - canPathFromAir: ' + navigationClimb.canPathFromAir);
    console.warn('spider - canPathOverLava: ' + navigationClimb.canPathOverLava);
    console.warn('spider - canPathOverWater: ' + navigationClimb.canPathOverWater);
    console.warn('spider - canSink: ' + navigationClimb.canSink);
    console.warn('spider - canSwim: ' + navigationClimb.canSwim);
    console.warn('spider - canWalk: ' + navigationClimb.canWalk);
    console.warn('spider - canWalkInLava: ' + navigationClimb.canWalkInLava);
    console.warn('spider - isAmphibious: ' + navigationClimb.isAmphibious);
    console.warn('spider - isValid: ' + navigationClimb.isValid());
})
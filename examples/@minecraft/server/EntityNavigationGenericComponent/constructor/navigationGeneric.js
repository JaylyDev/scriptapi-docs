import { world } from "@minecraft/server";

const dolphin = world.getDimension("overworld").spawnEntity("minecraft:dolphin", { x: 0, y: 0, z: 0 });
const navigationGeneric = dolphin.getComponent("minecraft:navigation.generic");
console.warn('dolphin - avoidDamageBlocks: ' + navigationGeneric.avoidDamageBlocks);
console.warn('dolphin - avoidPortals: ' + navigationGeneric.avoidPortals);
console.warn('dolphin - avoidSun: ' + navigationGeneric.avoidSun);
console.warn('dolphin - avoidWater: ' + navigationGeneric.avoidWater);
console.warn('dolphin - canBreach: ' + navigationGeneric.canBreach);
console.warn('dolphin - canBreakDoors: ' + navigationGeneric.canBreakDoors);
console.warn('dolphin - canFloat: ' + navigationGeneric.canFloat);
console.warn('dolphin - canJump: ' + navigationGeneric.canJump);
console.warn('dolphin - canOpenDoors: ' + navigationGeneric.canOpenDoors);
console.warn('dolphin - canOpenIronDoors: ' + navigationGeneric.canOpenIronDoors);
console.warn('dolphin - canPassDoors: ' + navigationGeneric.canPassDoors);
console.warn('dolphin - canPathFromAir: ' + navigationGeneric.canPathFromAir);
console.warn('dolphin - canPathOverLava: ' + navigationGeneric.canPathOverLava);
console.warn('dolphin - canPathOverWater: ' + navigationGeneric.canPathOverWater);
console.warn('dolphin - canSink: ' + navigationGeneric.canSink);
console.warn('dolphin - canSwim: ' + navigationGeneric.canSwim);
console.warn('dolphin - canWalk: ' + navigationGeneric.canWalk);
console.warn('dolphin - canWalkInLava: ' + navigationGeneric.canWalkInLava);
console.warn('dolphin - isAmphibious: ' + navigationGeneric.isAmphibious);
console.warn('dolphin - isValid: ' + navigationGeneric.isValid());
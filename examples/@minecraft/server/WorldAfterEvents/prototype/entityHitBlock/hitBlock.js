import { world } from "@minecraft/server";

// Subscribes to the entityHitBlock event, triggering when an entity collides with a block.
world.afterEvents.entityHitBlock.subscribe((event) => {
    const {
      damagingEntity, // The entity that hit the block.
      hitBlock,        // The block that was hit.
      hitBlockPermutation
    } = event;

    world.sendMessage(`${damagingEntity.typeId} hit a ${hitBlockPermutation.type.id} at ${hitBlock.location.x}, ${hitBlock.location.y}, ${hitBlock.location.z}`);
});

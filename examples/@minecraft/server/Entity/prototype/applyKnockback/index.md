
## Example for @minecraft/server v2

The following example (updated of the above - bounceSkeleton.ts) spawns several mobs, then applies a knockback to all skeletons.

```ts
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];
  const horizontalForce = { x: 5, z: 4 }; // horizontal knockback strength - xz vector
  const verticalStrength = 0.3;           // upward knockback strength

  // Spawn 10 mobs in a pattern
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(
      mobs[i % mobs.length],
      targetLocation
    );
  }

  const eqo: EntityQueryOptions = { type: "skeleton" };

  // Apply knockback to all skeletons in the area
  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(horizontalForce, verticalStrength);
  }
}
```



[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / TeleportOptions

# Interface: TeleportOptions

Contains additional options for teleporting an entity.

## Examples

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function teleport(targetLocation: DimensionLocation) {
  const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);

  system.runTimeout(() => {
    cow.teleport(
      { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
      {
        facingLocation: targetLocation,
      }
    );
  }, 20);
}
```

```typescript
import { system, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function teleportMovement(targetLocation: DimensionLocation) {
  const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);

  let inc = 1;
  const runId = system.runInterval(() => {
    pig.teleport(
      { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
      {
        facingLocation: targetLocation,
      }
    );

    if (inc > 100) {
      system.clearRun(runId);
    }
    inc++;
  }, 4);
}
```

## Source

```ts
export interface TeleportOptions {
    checkForBlocks?: boolean;
    dimension?: Dimension;
    facingLocation?: Vector3;
    keepVelocity?: boolean;
    rotation?: Vector2;
}
```

## Properties

### checkForBlocks?

> `optional` **checkForBlocks?**: `boolean`

#### Remarks

Whether to check whether blocks will block the entity after
teleport.

***

### dimension?

> `optional` **dimension?**: [`Dimension`](../classes/Dimension-1.md)

#### Remarks

Dimension to potentially move the entity to.  If not
specified, the entity is teleported within the dimension
that they reside.

***

### facingLocation?

> `optional` **facingLocation?**: [`Vector3`](Vector3-1.md)

#### Remarks

Location that the entity should be facing after teleport.

***

### keepVelocity?

> `optional` **keepVelocity?**: `boolean`

#### Remarks

Whether to retain the entities velocity after teleport.

***

### rotation?

> `optional` **rotation?**: [`Vector2`](Vector2-1.md)

#### Remarks

Rotation of the entity after teleport.

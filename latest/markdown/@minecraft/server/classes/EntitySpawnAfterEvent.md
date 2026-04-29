[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntitySpawnAfterEvent

# Class: EntitySpawnAfterEvent

Contains data related to an entity spawning within the
world.

## Example

```typescript
import { world, system, EntitySpawnAfterEvent, DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function logEntitySpawnEvent(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  // register a new function that is called when a new entity is created.
  world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
    if (entityEvent && entityEvent.entity) {
      log(`New entity of type ${entityEvent.entity.typeId} created!`, 1);
    } else {
      log(`The entity event did not work as expected.`, -1);
    }
  });

  system.runTimeout(() => {
    targetLocation.dimension.spawnEntity(
      "minecraft:horse<minecraft:ageable_grow_up>",
      Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
    );
  }, 20);
}
```

## Source

```ts
export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    entity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntitySpawnAfterEvent**(): `EntitySpawnAfterEvent`

#### Returns

`EntitySpawnAfterEvent`

## Properties

### cause

> `readonly` **cause**: [`EntityInitializationCause`](../enumerations/EntityInitializationCause.md)

#### Remarks

Initialization cause (Spawned, Born ...).

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> **entity**: [`Entity`](Entity.md)

#### Remarks

Entity that was spawned.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

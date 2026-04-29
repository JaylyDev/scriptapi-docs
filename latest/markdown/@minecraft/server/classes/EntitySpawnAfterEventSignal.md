[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntitySpawnAfterEventSignal

# Class: EntitySpawnAfterEventSignal

Registers a script-based event handler for handling what
happens when an entity spawns.

## Source

```ts
export class EntitySpawnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new EntitySpawnAfterEventSignal**(): `EntitySpawnAfterEventSignal`

#### Returns

`EntitySpawnAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function that handles the spawn event.

#### Returns

(`arg0`) => `void`

#### Remarks

Method to register an event handler for what happens when an
entity spawns.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

#### Example

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

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

Original function that was passed into the subscribe event,
that is to be unregistered.

#### Returns

`void`

#### Remarks

Unregisters a method that was previously subscribed to the
subscription event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

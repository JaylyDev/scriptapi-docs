[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / LeverActionAfterEventSignal

# Class: LeverActionAfterEventSignal

Manages callbacks that are connected to lever moves
(activates or deactivates).

## Example

```typescript
import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a lever
  const cobblestone = targetLocation.dimension.getBlock(targetLocation);
  const lever = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (cobblestone === undefined || lever === undefined) {
    log('Could not find block at location.');
    return -1;
  }

  cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
  lever.setPermutation(
    BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState('lever_direction', 'up_north_south')
  );

  world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
    const eventLoc = leverActionEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log('Lever activate event at tick ' + system.currentTick);
    }
  });
}
```

## Source

```ts
export class LeverActionAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new LeverActionAfterEventSignal**(): `LeverActionAfterEventSignal`

#### Returns

`LeverActionAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a lever is moved
(activates or deactivates).

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

Removes a callback from being called when a lever is moved
(activates or deactivates).

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

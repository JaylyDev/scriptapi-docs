[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / TripWireTripAfterEventSignal

# Class: TripWireTripAfterEventSignal

Manages callbacks that are connected to when a trip wire is
tripped.

## Example

```typescript
import { world, system, BlockPermutation, TripWireTripAfterEvent, DimensionLocation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function tripWireTripEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a tripwire
  const redstone = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y - 1,
    z: targetLocation.z,
  });
  const tripwire = targetLocation.dimension.getBlock(targetLocation);

  if (redstone === undefined || tripwire === undefined) {
    log('Could not find block at location.');
    return -1;
  }

  redstone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.RedstoneBlock));
  tripwire.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.TripWire));

  world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
    const eventLoc = tripWireTripEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        'Tripwire trip event at tick ' +
          system.currentTick +
          (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : '')
      );
    }
  });
}
```

## Source

```ts
export class TripWireTripAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new TripWireTripAfterEventSignal**(): `TripWireTripAfterEventSignal`

#### Returns

`TripWireTripAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a trip wire is
tripped.

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

Removes a callback from being called when a trip wire is
tripped.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / TripWireTripAfterEvent

# Class: TripWireTripAfterEvent

Contains information related to changes to a trip wire trip.

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
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly sources: Entity[];
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new TripWireTripAfterEvent**(): `TripWireTripAfterEvent`

#### Returns

`TripWireTripAfterEvent`

#### Overrides

[`BlockEvent`](BlockEvent.md).[`constructor`](BlockEvent.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent.md).[`block`](BlockEvent.md#block)

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent.md).[`dimension`](BlockEvent.md#dimension)

***

### isPowered

> `readonly` **isPowered**: `boolean`

#### Remarks

Whether or not the block has redstone power.

#### World Ready

This property can't be read in early-execution mode.

***

### sources

> `readonly` **sources**: [`Entity`](Entity.md)[]

#### Remarks

The sources that triggered the trip wire to trip.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PistonActivateAfterEvent

# Class: PistonActivateAfterEvent

Contains information related to changes to a piston
expanding or retracting.

## Example

```typescript
import {
  world,
  system,
  BlockPermutation,
  BlockPistonState,
  PistonActivateAfterEvent,
  DimensionLocation,
} from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function pistonAfterEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a couple of piston blocks
  const piston = targetLocation.dimension.getBlock(targetLocation);
  const button = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (piston === undefined || button === undefined) {
    log('Could not find block at location.');
    return -1;
  }

  piston.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston).withState('facing_direction', 3));
  button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState('facing_direction', 1));

  world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
    const eventLoc = pistonEvent.piston.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
      log(
        'Piston event at ' +
          system.currentTick +
          (pistonEvent.piston.isMoving ? ' Moving' : '') +
          (pistonEvent.piston.state === BlockPistonState.Expanding ? ' Expanding' : '') +
          (pistonEvent.piston.state === BlockPistonState.Expanded ? ' Expanded' : '') +
          (pistonEvent.piston.state === BlockPistonState.Retracting ? ' Retracting' : '') +
          (pistonEvent.piston.state === BlockPistonState.Retracted ? ' Retracted' : '')
      );
    }
  });
}
```

## Source

```ts
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new PistonActivateAfterEvent**(): `PistonActivateAfterEvent`

#### Returns

`PistonActivateAfterEvent`

#### Overrides

[`BlockEvent`](BlockEvent-1.md).[`constructor`](BlockEvent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`block`](BlockEvent-1.md#block)

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`dimension`](BlockEvent-1.md#dimension)

***

### isExpanding

> `readonly` **isExpanding**: `boolean`

#### Remarks

True if the piston is the process of expanding.

#### World Ready

This property can't be read in early-execution mode.

***

### piston

> `readonly` **piston**: [`BlockPistonComponent`](BlockPistonComponent-1.md)

#### Remarks

Contains additional properties and details of the piston.

#### World Ready

This property can't be read in early-execution mode.

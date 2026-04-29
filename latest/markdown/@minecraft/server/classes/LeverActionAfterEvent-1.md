[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / LeverActionAfterEvent

# Class: LeverActionAfterEvent

Contains information related to changes to a lever
activating or deactivating.

## Example

```typescript
import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a lever
  const cobblestone = targetLocation.dimension.getBlock(targetLocation);
  const lever = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (cobblestone === undefined || lever === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
  lever.setPermutation(
    BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState("lever_direction", "up_north_south")
  );

  world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
    const eventLoc = leverActionEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log("Lever activate event at tick " + system.currentTick);
    }
  });
}
```

## Source

```ts
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new LeverActionAfterEvent**(): `LeverActionAfterEvent`

#### Returns

`LeverActionAfterEvent`

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

### isPowered

> `readonly` **isPowered**: `boolean`

#### Remarks

True if the lever is activated (that is, transmitting
power).

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Optional player that triggered the lever activation.

#### World Ready

This property can't be read in early-execution mode.

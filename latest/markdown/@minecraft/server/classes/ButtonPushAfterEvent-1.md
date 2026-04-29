[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ButtonPushAfterEvent

# Class: ButtonPushAfterEvent

Contains information related to changes to a button push.

## Example

```typescript
import { world, system, BlockPermutation, ButtonPushAfterEvent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function buttonPushEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // set up a button on cobblestone
  const cobblestone = targetLocation.dimension.getBlock(targetLocation);
  const button = targetLocation.dimension.getBlock({
    x: targetLocation.x,
    y: targetLocation.y + 1,
    z: targetLocation.z,
  });

  if (cobblestone === undefined || button === undefined) {
    log("Could not find block at location.");
    return -1;
  }

  cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
  button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState("facing_direction", 1));

  world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
    const eventLoc = buttonPushEvent.block.location;

    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
      log("Button push event at tick " + system.currentTick);
    }
  });
}
```

## Source

```ts
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    readonly source: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new ButtonPushAfterEvent**(): `ButtonPushAfterEvent`

#### Returns

`ButtonPushAfterEvent`

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

### source

> `readonly` **source**: [`Entity`](Entity-1.md)

#### Remarks

Optional source that triggered the button push.

#### World Ready

This property can't be read in early-execution mode.

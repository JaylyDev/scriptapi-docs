[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockEvent

# Class: BlockEvent

Contains information regarding an event that impacts a
specific block.

## Source

```ts
export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}
```

## Extended by

- [`BlockComponentBlockBreakEvent`](BlockComponentBlockBreakEvent.md)
- [`BlockComponentEntityEvent`](BlockComponentEntityEvent.md)
- [`BlockComponentEntityFallOnEvent`](BlockComponentEntityFallOnEvent.md)
- [`BlockComponentOnPlaceEvent`](BlockComponentOnPlaceEvent.md)
- [`BlockComponentPlayerBreakEvent`](BlockComponentPlayerBreakEvent.md)
- [`BlockComponentPlayerInteractEvent`](BlockComponentPlayerInteractEvent.md)
- [`BlockComponentPlayerPlaceBeforeEvent`](BlockComponentPlayerPlaceBeforeEvent.md)
- [`BlockComponentRandomTickEvent`](BlockComponentRandomTickEvent.md)
- [`BlockComponentRedstoneUpdateEvent`](BlockComponentRedstoneUpdateEvent.md)
- [`BlockComponentStepOffEvent`](BlockComponentStepOffEvent.md)
- [`BlockComponentStepOnEvent`](BlockComponentStepOnEvent.md)
- [`BlockComponentTickEvent`](BlockComponentTickEvent.md)
- [`BlockExplodeAfterEvent`](BlockExplodeAfterEvent.md)
- [`ButtonPushAfterEvent`](ButtonPushAfterEvent.md)
- [`LeverActionAfterEvent`](LeverActionAfterEvent.md)
- [`PistonActivateAfterEvent`](PistonActivateAfterEvent.md)
- [`PlayerBreakBlockAfterEvent`](PlayerBreakBlockAfterEvent.md)
- [`PlayerBreakBlockBeforeEvent`](PlayerBreakBlockBeforeEvent.md)
- [`PlayerPlaceBlockAfterEvent`](PlayerPlaceBlockAfterEvent.md)
- [`PressurePlatePopAfterEvent`](PressurePlatePopAfterEvent.md)
- [`PressurePlatePushAfterEvent`](PressurePlatePushAfterEvent.md)
- [`TargetBlockHitAfterEvent`](TargetBlockHitAfterEvent.md)
- [`TripWireTripAfterEvent`](TripWireTripAfterEvent.md)

## Constructors

### Constructor

> `private` **new BlockEvent**(): `BlockEvent`

#### Returns

`BlockEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

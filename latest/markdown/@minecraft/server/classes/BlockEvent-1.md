[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockEvent

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

- [`BlockComponentBlockBreakEvent`](BlockComponentBlockBreakEvent-1.md)
- [`BlockComponentEntityEvent`](BlockComponentEntityEvent-1.md)
- [`BlockComponentEntityFallOnEvent`](BlockComponentEntityFallOnEvent-1.md)
- [`BlockComponentOnPlaceEvent`](BlockComponentOnPlaceEvent-1.md)
- [`BlockComponentPlayerBreakEvent`](BlockComponentPlayerBreakEvent-1.md)
- [`BlockComponentPlayerInteractEvent`](BlockComponentPlayerInteractEvent-1.md)
- [`BlockComponentPlayerPlaceBeforeEvent`](BlockComponentPlayerPlaceBeforeEvent-1.md)
- [`BlockComponentRandomTickEvent`](BlockComponentRandomTickEvent-1.md)
- [`BlockComponentRedstoneUpdateEvent`](BlockComponentRedstoneUpdateEvent-1.md)
- [`BlockComponentStepOffEvent`](BlockComponentStepOffEvent-1.md)
- [`BlockComponentStepOnEvent`](BlockComponentStepOnEvent-1.md)
- [`BlockComponentTickEvent`](BlockComponentTickEvent-1.md)
- [`BlockExplodeAfterEvent`](BlockExplodeAfterEvent-1.md)
- [`ButtonPushAfterEvent`](ButtonPushAfterEvent-1.md)
- [`LeverActionAfterEvent`](LeverActionAfterEvent-1.md)
- [`PistonActivateAfterEvent`](PistonActivateAfterEvent-1.md)
- [`PlayerBreakBlockAfterEvent`](PlayerBreakBlockAfterEvent-1.md)
- [`PlayerBreakBlockBeforeEvent`](PlayerBreakBlockBeforeEvent-1.md)
- [`PlayerPlaceBlockAfterEvent`](PlayerPlaceBlockAfterEvent-1.md)
- [`PlayerPlaceBlockBeforeEvent`](PlayerPlaceBlockBeforeEvent.md)
- [`PressurePlatePopAfterEvent`](PressurePlatePopAfterEvent-1.md)
- [`PressurePlatePushAfterEvent`](PressurePlatePushAfterEvent-1.md)
- [`TargetBlockHitAfterEvent`](TargetBlockHitAfterEvent-1.md)
- [`TripWireTripAfterEvent`](TripWireTripAfterEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockEvent**(): `BlockEvent`

#### Returns

`BlockEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block currently in the world at the location of this event.

#### World Ready

This property can't be read in early-execution mode.

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Dimension that contains the block that is the subject of
this event.

#### World Ready

This property can't be read in early-execution mode.

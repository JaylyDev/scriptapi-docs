[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentPlayerInteractEvent

# Class: BlockComponentPlayerInteractEvent

Contains information regarding a specific block being
interacted with.

## Source

```ts
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    readonly face: Direction;
    readonly faceLocation?: Vector3;
    readonly player?: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentPlayerInteractEvent**(): `BlockComponentPlayerInteractEvent`

#### Returns

`BlockComponentPlayerInteractEvent`

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

### face

> `readonly` **face**: [`Direction`](../enumerations/Direction-1.md)

#### Remarks

The block face that was interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### faceLocation?

> `readonly` `optional` **faceLocation?**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Location relative to the bottom north-west corner of the
block that the player interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### player?

> `readonly` `optional` **player?**: [`Player`](Player-1.md)

#### Remarks

The player that interacted with this block.

#### World Ready

This property can't be read in early-execution mode.

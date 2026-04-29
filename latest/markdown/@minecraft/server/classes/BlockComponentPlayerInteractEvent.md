[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentPlayerInteractEvent

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

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentPlayerInteractEvent**(): `BlockComponentPlayerInteractEvent`

#### Returns

`BlockComponentPlayerInteractEvent`

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

### face

> `readonly` **face**: [`Direction`](../enumerations/Direction.md)

#### Remarks

The block face that was interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### faceLocation?

> `readonly` `optional` **faceLocation?**: [`Vector3`](../interfaces/Vector3.md)

#### Remarks

Location relative to the bottom north-west corner of the
block that the player interacted with.

#### World Ready

This property can't be read in early-execution mode.

***

### player?

> `readonly` `optional` **player?**: [`Player`](Player.md)

#### Remarks

The player that interacted with this block.

#### World Ready

This property can't be read in early-execution mode.

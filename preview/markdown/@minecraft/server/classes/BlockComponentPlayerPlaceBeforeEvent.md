[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentPlayerPlaceBeforeEvent

# Class: BlockComponentPlayerPlaceBeforeEvent

Contains information regarding an event before a player
places a block.

## Source

```ts
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    permutationToPlace: BlockPermutation;
    readonly player?: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentPlayerPlaceBeforeEvent**(): `BlockComponentPlayerPlaceBeforeEvent`

#### Returns

`BlockComponentPlayerPlaceBeforeEvent`

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

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, cancels the block place event.

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

#### Inherited from

[`BlockEvent`](BlockEvent.md).[`dimension`](BlockEvent.md#dimension)

***

### face

> `readonly` **face**: [`Direction`](../enumerations/Direction.md)

#### Remarks

The block face that was placed onto.

#### World Ready

This property can't be read in early-execution mode.

***

### permutationToPlace

> **permutationToPlace**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

The block permutation that will be placed if the event is
not cancelled. If set to a different block permutation, that
permutation will be placed instead.

#### World Ready

This property can't be read in early-execution mode.

***

### player?

> `readonly` `optional` **player?**: [`Player`](Player.md)

#### Remarks

The player that is placing this block.

#### World Ready

This property can't be read in early-execution mode.

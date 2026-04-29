[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentPlayerBreakEvent

# Class: BlockComponentPlayerBreakEvent

Contains information regarding a specific block being broken
by a player.

## Source

```ts
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly player?: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentPlayerBreakEvent**(): `BlockComponentPlayerBreakEvent`

#### Returns

`BlockComponentPlayerBreakEvent`

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

### brokenBlockPermutation

> `readonly` **brokenBlockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

Returns permutation information about this block before it
was broken.

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

#### Inherited from

[`BlockEvent`](BlockEvent-1.md).[`dimension`](BlockEvent-1.md#dimension)

***

### player?

> `readonly` `optional` **player?**: [`Player`](Player-1.md)

#### Remarks

The player that broke this block.

#### World Ready

This property can't be read in early-execution mode.

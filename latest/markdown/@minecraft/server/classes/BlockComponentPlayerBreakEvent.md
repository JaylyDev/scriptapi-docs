[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentPlayerBreakEvent

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

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentPlayerBreakEvent**(): `BlockComponentPlayerBreakEvent`

#### Returns

`BlockComponentPlayerBreakEvent`

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

### brokenBlockPermutation

> `readonly` **brokenBlockPermutation**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

Returns permutation information about this block before it
was broken.

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

### player?

> `readonly` `optional` **player?**: [`Player`](Player.md)

#### Remarks

The player that broke this block.

#### World Ready

This property can't be read in early-execution mode.

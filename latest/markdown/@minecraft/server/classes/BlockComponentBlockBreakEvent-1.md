[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentBlockBreakEvent

# Class: BlockComponentBlockBreakEvent

Contains information regarding a specific block being
broken.

## Source

```ts
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    readonly blockDestructionSource?: Block;
    readonly brokenBlockPermutation: BlockPermutation;
    readonly entitySource?: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentBlockBreakEvent**(): `BlockComponentBlockBreakEvent`

#### Returns

`BlockComponentBlockBreakEvent`

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

### blockDestructionSource?

> `readonly` `optional` **blockDestructionSource?**: [`Block`](Block-1.md)

#### Remarks

The block that caused destruction.

#### World Ready

This property can't be read in early-execution mode.

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

### entitySource?

> `readonly` `optional` **entitySource?**: [`Entity`](Entity-1.md)

#### Remarks

The Actor that caused destruction.

#### World Ready

This property can't be read in early-execution mode.

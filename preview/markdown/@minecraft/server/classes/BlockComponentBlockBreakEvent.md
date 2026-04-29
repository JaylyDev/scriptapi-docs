[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentBlockBreakEvent

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

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentBlockBreakEvent**(): `BlockComponentBlockBreakEvent`

#### Returns

`BlockComponentBlockBreakEvent`

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

### blockDestructionSource?

> `readonly` `optional` **blockDestructionSource?**: [`Block`](Block.md)

#### Remarks

The block that caused destruction.

#### World Ready

This property can't be read in early-execution mode.

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

### entitySource?

> `readonly` `optional` **entitySource?**: [`Entity`](Entity.md)

#### Remarks

The Actor that caused destruction.

#### World Ready

This property can't be read in early-execution mode.

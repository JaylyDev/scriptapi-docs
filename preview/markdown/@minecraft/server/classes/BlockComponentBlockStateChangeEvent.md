[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentBlockStateChangeEvent

# Class: BlockComponentBlockStateChangeEvent

**`Beta`**

Contains information regarding a specific block permutation
that was changed from a previous permutation.

## Source

```ts
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    readonly previousPermutation: BlockPermutation;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentBlockStateChangeEvent**(): `BlockComponentBlockStateChangeEvent`

#### Returns

`BlockComponentBlockStateChangeEvent`

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

### previousPermutation

> `readonly` **previousPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

The previous BlockPermutation.

#### World Ready

This property can't be read in early-execution mode.

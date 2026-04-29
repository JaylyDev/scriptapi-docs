[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockExplodeAfterEvent

# Class: BlockExplodeAfterEvent

Contains information regarding an explosion that has
occurred for a specific block.

## Source

```ts
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    readonly explodedBlockPermutation: BlockPermutation;
    readonly source?: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockExplodeAfterEvent**(): `BlockExplodeAfterEvent`

#### Returns

`BlockExplodeAfterEvent`

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

### explodedBlockPermutation

> `readonly` **explodedBlockPermutation**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

Description of the block that has exploded.

#### World Ready

This property can't be read in early-execution mode.

***

### source?

> `readonly` `optional` **source?**: [`Entity`](Entity.md)

#### Remarks

Optional source of the explosion.

#### World Ready

This property can't be read in early-execution mode.

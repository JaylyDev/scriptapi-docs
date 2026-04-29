[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentEntityFallOnEvent

# Class: BlockComponentEntityFallOnEvent

Contains information regarding an entity falling onto a
specific block.

## Source

```ts
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
    readonly fallDistance: number;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentEntityFallOnEvent**(): `BlockComponentEntityFallOnEvent`

#### Returns

`BlockComponentEntityFallOnEvent`

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

### entity?

> `readonly` `optional` **entity?**: [`Entity`](Entity-1.md)

#### Remarks

The entity that fell onto the block.

#### World Ready

This property can't be read in early-execution mode.

***

### fallDistance

> `readonly` **fallDistance**: `number`

#### Remarks

The distance that the entity fell onto this block with.

#### World Ready

This property can't be read in early-execution mode.

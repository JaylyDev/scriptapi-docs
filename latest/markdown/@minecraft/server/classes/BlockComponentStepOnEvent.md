[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentStepOnEvent

# Class: BlockComponentStepOnEvent

Contains information regarding an entity stepping onto a
specific block.

## Source

```ts
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentStepOnEvent**(): `BlockComponentStepOnEvent`

#### Returns

`BlockComponentStepOnEvent`

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

### entity?

> `readonly` `optional` **entity?**: [`Entity`](Entity.md)

#### Remarks

The entity that stepped on the block.

#### World Ready

This property can't be read in early-execution mode.

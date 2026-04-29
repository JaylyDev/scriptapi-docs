[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentStepOffEvent

# Class: BlockComponentStepOffEvent

Contains information regarding an entity stepping off a
specific block.

## Source

```ts
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentStepOffEvent**(): `BlockComponentStepOffEvent`

#### Returns

`BlockComponentStepOffEvent`

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

The entity that stepped off the block.

#### World Ready

This property can't be read in early-execution mode.

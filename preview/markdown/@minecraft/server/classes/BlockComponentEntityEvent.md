[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentEntityEvent

# Class: BlockComponentEntityEvent

Contains information regarding an event sent by an entity to
this block in the world.

## Source

```ts
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    readonly blockPermutation: BlockPermutation;
    readonly entitySource: Entity;
    readonly name: string;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentEntityEvent**(): `BlockComponentEntityEvent`

#### Returns

`BlockComponentEntityEvent`

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

### blockPermutation

> `readonly` **blockPermutation**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

Returns permutation information about the block receiving
the event.

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

### entitySource

> `readonly` **entitySource**: [`Entity`](Entity.md)

#### Remarks

The entity that sent the event.

#### World Ready

This property can't be read in early-execution mode.

***

### name

> `readonly` **name**: `string`

#### Remarks

Name of the event fired by the entity.

#### World Ready

This property can't be read in early-execution mode.

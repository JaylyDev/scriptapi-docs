[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockComponentEntityFallOnEvent

# Class: BlockComponentEntityFallOnEvent

Contains information regarding an entity falling onto a
specific block.

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new BlockComponentEntityFallOnEvent**(): `BlockComponentEntityFallOnEvent`

#### Returns

`BlockComponentEntityFallOnEvent`

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

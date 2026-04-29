[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockComponentEntityEvent

# Class: BlockComponentEntityEvent

**`Beta`**

Contains information regarding an event sent by an entity to
this block in the world.

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockComponentEntityEvent**(): `BlockComponentEntityEvent`

#### Returns

`BlockComponentEntityEvent`

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

### blockPermutation

> `readonly` **blockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

Returns permutation information about the block receiving
the event.

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

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockExplodeAfterEvent

# Class: BlockExplodeAfterEvent

Contains information regarding an explosion that has
occurred for a specific block.

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockExplodeAfterEvent**(): `BlockExplodeAfterEvent`

#### Returns

`BlockExplodeAfterEvent`

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

### explodedBlockPermutation

> `readonly` **explodedBlockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

Description of the block that has exploded.

#### World Ready

This property can't be read in early-execution mode.

***

### source?

> `readonly` `optional` **source?**: [`Entity`](Entity-1.md)

#### Remarks

Optional source of the explosion.

#### World Ready

This property can't be read in early-execution mode.

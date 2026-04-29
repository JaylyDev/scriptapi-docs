[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockContainerClosedAfterEvent

# Class: BlockContainerClosedAfterEvent

**`Beta`**

Contains information regarding a specific container block
being closed.

## Source

```ts
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    closeSource: ContainerAccessSource;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new BlockContainerClosedAfterEvent**(): `BlockContainerClosedAfterEvent`

#### Returns

`BlockContainerClosedAfterEvent`

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

### closeSource

> **closeSource**: [`ContainerAccessSource`](../interfaces/ContainerAccessSource.md)

#### Remarks

The source of the block container being closed.

This property can't be edited in restricted-execution mode.

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

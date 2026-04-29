[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / TargetBlockHitAfterEvent

# Class: TargetBlockHitAfterEvent

Contains information related to changes to a target block
hit.

## Source

```ts
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    readonly hitVector: Vector3;
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new TargetBlockHitAfterEvent**(): `TargetBlockHitAfterEvent`

#### Returns

`TargetBlockHitAfterEvent`

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

### hitVector

> `readonly` **hitVector**: [`Vector3`](../interfaces/Vector3.md)

#### Remarks

The position where the source hit the block.

#### World Ready

This property can't be read in early-execution mode.

***

### previousRedstonePower

> `readonly` **previousRedstonePower**: `number`

#### Remarks

The redstone power before the block is hit.

#### World Ready

This property can't be read in early-execution mode.

***

### redstonePower

> `readonly` **redstonePower**: `number`

#### Remarks

The redstone power at the time the block is hit.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Entity`](Entity.md)

#### Remarks

Optional source that hit the target block.

#### World Ready

This property can't be read in early-execution mode.

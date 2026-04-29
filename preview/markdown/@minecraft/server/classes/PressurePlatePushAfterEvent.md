[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / PressurePlatePushAfterEvent

# Class: PressurePlatePushAfterEvent

Contains information related to changes to a pressure plate
push.

## Source

```ts
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}
```

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new PressurePlatePushAfterEvent**(): `PressurePlatePushAfterEvent`

#### Returns

`PressurePlatePushAfterEvent`

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

### previousRedstonePower

> `readonly` **previousRedstonePower**: `number`

#### Remarks

The redstone power of the pressure plate before it was
pushed.

#### World Ready

This property can't be read in early-execution mode.

***

### redstonePower

> `readonly` **redstonePower**: `number`

#### Remarks

The redstone power of the pressure plate at the time of the
push.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Entity`](Entity.md)

#### Remarks

Source that triggered the pressure plate push.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PressurePlatePopAfterEvent

# Class: PressurePlatePopAfterEvent

Contains information related to changes to a pressure plate
pop.

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new PressurePlatePopAfterEvent**(): `PressurePlatePopAfterEvent`

#### Returns

`PressurePlatePopAfterEvent`

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

### previousRedstonePower

> `readonly` **previousRedstonePower**: `number`

#### Remarks

The redstone power of the pressure plate before it was
popped.

#### World Ready

This property can't be read in early-execution mode.

***

### redstonePower

> `readonly` **redstonePower**: `number`

#### Remarks

The redstone power of the pressure plate at the time of the
pop.

#### World Ready

This property can't be read in early-execution mode.

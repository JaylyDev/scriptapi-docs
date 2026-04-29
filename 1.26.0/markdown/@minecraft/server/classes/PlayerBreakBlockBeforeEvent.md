[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerBreakBlockBeforeEvent

# Class: PlayerBreakBlockBeforeEvent

Contains information regarding an event before a player
breaks a block.

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new PlayerBreakBlockBeforeEvent**(): `PlayerBreakBlockBeforeEvent`

#### Returns

`PlayerBreakBlockBeforeEvent`

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

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, cancels the block break event.

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

### itemStack?

> `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack that is being used to break the block, or
undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Player breaking the block for this event.

#### World Ready

This property can't be read in early-execution mode.

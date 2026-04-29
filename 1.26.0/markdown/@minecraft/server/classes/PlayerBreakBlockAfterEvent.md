[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerBreakBlockAfterEvent

# Class: PlayerBreakBlockAfterEvent

Contains information regarding an event after a player
breaks a block.

## Extends

- [`BlockEvent`](BlockEvent.md)

## Constructors

### Constructor

> `private` **new PlayerBreakBlockAfterEvent**(): `PlayerBreakBlockAfterEvent`

#### Returns

`PlayerBreakBlockAfterEvent`

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

### brokenBlockPermutation

> `readonly` **brokenBlockPermutation**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

Returns permutation information about this block before it
was broken.

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

### itemStackAfterBreak?

> `readonly` `optional` **itemStackAfterBreak?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack that was used to break the block after the
block was broken, or undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStackBeforeBreak?

> `readonly` `optional` **itemStackBeforeBreak?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack that was used to break the block before the
block was broken, or undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Player that broke the block for this event.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerBreakBlockAfterEvent

# Class: PlayerBreakBlockAfterEvent

Contains information regarding an event after a player
breaks a block.

## Source

```ts
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly itemStackAfterBreak?: ItemStack;
    readonly itemStackBeforeBreak?: ItemStack;
    readonly player: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new PlayerBreakBlockAfterEvent**(): `PlayerBreakBlockAfterEvent`

#### Returns

`PlayerBreakBlockAfterEvent`

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

### brokenBlockPermutation

> `readonly` **brokenBlockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

Returns permutation information about this block before it
was broken.

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

### itemStackAfterBreak?

> `readonly` `optional` **itemStackAfterBreak?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack that was used to break the block after the
block was broken, or undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStackBeforeBreak?

> `readonly` `optional` **itemStackBeforeBreak?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack that was used to break the block before the
block was broken, or undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Player that broke the block for this event.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerBreakBlockBeforeEvent

# Class: PlayerBreakBlockBeforeEvent

Contains information regarding an event before a player
breaks a block.

## Source

```ts
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    itemStack?: ItemStack;
    readonly player: Player;
}
```

## Extends

- [`BlockEvent`](BlockEvent-1.md)

## Constructors

### Constructor

> `private` **new PlayerBreakBlockBeforeEvent**(): `PlayerBreakBlockBeforeEvent`

#### Returns

`PlayerBreakBlockBeforeEvent`

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

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, cancels the block break event.

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

### itemStack?

> `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack that is being used to break the block, or
undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Player breaking the block for this event.

#### World Ready

This property can't be read in early-execution mode.

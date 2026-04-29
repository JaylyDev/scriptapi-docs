[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInteractWithEntityAfterEvent

# Class: PlayerInteractWithEntityAfterEvent

Contains information regarding an event after a player
successfully interacts with an entity.

## Source

```ts
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}
```

## Constructors

### Constructor

> `private` **new PlayerInteractWithEntityAfterEvent**(): `PlayerInteractWithEntityAfterEvent`

#### Returns

`PlayerInteractWithEntityAfterEvent`

## Properties

### beforeItemStack?

> `readonly` `optional` **beforeItemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The ItemStack before the interaction succeeded, or undefined
if hand is empty.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The ItemStack after the interaction succeeded, or undefined
if hand is empty.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### target

> `readonly` **target**: [`Entity`](Entity.md)

#### Remarks

The entity that will be interacted with.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInteractWithEntityAfterEvent

# Class: PlayerInteractWithEntityAfterEvent

Contains information regarding an event after a player
successfully interacts with an entity.

## Constructors

### Constructor

> `private` **new PlayerInteractWithEntityAfterEvent**(): `PlayerInteractWithEntityAfterEvent`

#### Returns

`PlayerInteractWithEntityAfterEvent`

## Properties

### beforeItemStack?

> `readonly` `optional` **beforeItemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The ItemStack before the interaction succeeded, or undefined
if hand is empty.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The ItemStack after the interaction succeeded, or undefined
if hand is empty.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### target

> `readonly` **target**: [`Entity`](Entity-1.md)

#### Remarks

The entity that will be interacted with.

#### World Ready

This property can't be read in early-execution mode.

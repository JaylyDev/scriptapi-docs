[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerSwingStartAfterEvent

# Class: PlayerSwingStartAfterEvent

Contains information regarding a player starting to swing
their arm.

## Constructors

### Constructor

> `private` **new PlayerSwingStartAfterEvent**(): `PlayerSwingStartAfterEvent`

#### Returns

`PlayerSwingStartAfterEvent`

## Properties

### heldItemStack?

> `readonly` `optional` **heldItemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack being held by the player at the start of
their swing.

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

### swingSource

> `readonly` **swingSource**: [`EntitySwingSource`](../enumerations/EntitySwingSource.md)

#### Remarks

The source of the Player swing, see [EntitySwingSource](../enumerations/EntitySwingSource.md).

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemReleaseUseAfterEvent

# Class: ItemReleaseUseAfterEvent

Contains information related to a chargeable item when the
player has finished using the item and released the build
action.

## Constructors

### Constructor

> `private` **new ItemReleaseUseAfterEvent**(): `ItemReleaseUseAfterEvent`

#### Returns

`ItemReleaseUseAfterEvent`

## Properties

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

Returns the item stack that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

***

### useDuration

> `readonly` **useDuration**: `number`

#### Remarks

Returns the time, in ticks, for the remaining duration left
before the charge completes its cycle.

#### World Ready

This property can't be read in early-execution mode.

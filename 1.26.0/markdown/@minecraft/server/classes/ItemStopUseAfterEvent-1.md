[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemStopUseAfterEvent

# Class: ItemStopUseAfterEvent

Contains information related to a chargeable item has
finished an items use cycle, or when the player has released
the use action with the item.

## Constructors

### Constructor

> `private` **new ItemStopUseAfterEvent**(): `ItemStopUseAfterEvent`

#### Returns

`ItemStopUseAfterEvent`

## Properties

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The impacted item stack that is stopping being charged.
ItemStopUseAfterEvent can be called when teleporting to a
different dimension and this can be undefined.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

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

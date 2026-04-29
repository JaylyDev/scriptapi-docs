[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemStartUseOnAfterEvent

# Class: ItemStartUseOnAfterEvent

Contains information related to an item being used on a
block. This event fires when a player presses the the Use
Item / Place Block button to successfully use an item or
place a block. Fires for the first block that is interacted
with when performing a build action. Note: This event cannot
be used with Hoe or Axe items.

## Constructors

### Constructor

> `private` **new ItemStartUseOnAfterEvent**(): `ItemStartUseOnAfterEvent`

#### Returns

`ItemStartUseOnAfterEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

The block that the item is used on.

#### World Ready

This property can't be read in early-execution mode.

***

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction.md)

#### Remarks

The face of the block that an item is being used on.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The impacted item stack that is starting to be used. Can be
undefined in some gameplay scenarios like pushing a button
with an empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

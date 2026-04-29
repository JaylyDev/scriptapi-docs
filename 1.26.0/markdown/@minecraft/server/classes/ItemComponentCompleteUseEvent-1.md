[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentCompleteUseEvent

# Class: ItemComponentCompleteUseEvent

Contains information related to a chargeable item completing
being charged via a component.

## Extends

- [`ItemCompleteUseEvent`](ItemCompleteUseEvent-1.md)

## Constructors

### Constructor

> `private` **new ItemComponentCompleteUseEvent**(): `ItemComponentCompleteUseEvent`

#### Returns

`ItemComponentCompleteUseEvent`

#### Overrides

[`ItemCompleteUseEvent`](ItemCompleteUseEvent-1.md).[`constructor`](ItemCompleteUseEvent-1.md#constructor)

## Properties

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

Returns the item stack that has completed charging.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemCompleteUseEvent`](ItemCompleteUseEvent-1.md).[`itemStack`](ItemCompleteUseEvent-1.md#itemstack)

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemCompleteUseEvent`](ItemCompleteUseEvent-1.md).[`source`](ItemCompleteUseEvent-1.md#source)

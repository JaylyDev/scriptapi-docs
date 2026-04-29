[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemUseBeforeEvent

# Class: ItemUseBeforeEvent

Contains information related to an item being used.

## Source

```ts
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}
```

## Extends

- [`ItemUseAfterEvent`](ItemUseAfterEvent-1.md)

## Constructors

### Constructor

> `private` **new ItemUseBeforeEvent**(): `ItemUseBeforeEvent`

#### Returns

`ItemUseBeforeEvent`

#### Overrides

[`ItemUseAfterEvent`](ItemUseAfterEvent-1.md).[`constructor`](ItemUseAfterEvent-1.md#constructor)

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, this will cancel the item use behavior.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack

> **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The impacted item stack that is being used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseAfterEvent`](ItemUseAfterEvent-1.md).[`itemStack`](ItemUseAfterEvent-1.md#itemstack)

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseAfterEvent`](ItemUseAfterEvent-1.md).[`source`](ItemUseAfterEvent-1.md#source)

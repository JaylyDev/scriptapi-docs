[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemUseBeforeEvent

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

- [`ItemUseAfterEvent`](ItemUseAfterEvent.md)

## Constructors

### Constructor

> `private` **new ItemUseBeforeEvent**(): `ItemUseBeforeEvent`

#### Returns

`ItemUseBeforeEvent`

#### Overrides

[`ItemUseAfterEvent`](ItemUseAfterEvent.md).[`constructor`](ItemUseAfterEvent.md#constructor)

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, this will cancel the item use behavior.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack

> **itemStack**: [`ItemStack`](ItemStack.md)

#### Remarks

The impacted item stack that is being used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseAfterEvent`](ItemUseAfterEvent.md).[`itemStack`](ItemUseAfterEvent.md#itemstack)

***

### source

> `readonly` **source**: [`Player`](Player.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseAfterEvent`](ItemUseAfterEvent.md).[`source`](ItemUseAfterEvent.md#source)

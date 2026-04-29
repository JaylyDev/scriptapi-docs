[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemComponentCompleteUseEvent

# Class: ItemComponentCompleteUseEvent

Contains information related to a chargeable item completing
being charged via a component.

## Source

```ts
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
    private constructor();
}
```

## Extends

- [`ItemCompleteUseEvent`](ItemCompleteUseEvent.md)

## Constructors

### Constructor

> `private` **new ItemComponentCompleteUseEvent**(): `ItemComponentCompleteUseEvent`

#### Returns

`ItemComponentCompleteUseEvent`

#### Overrides

[`ItemCompleteUseEvent`](ItemCompleteUseEvent.md).[`constructor`](ItemCompleteUseEvent.md#constructor)

## Properties

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack.md)

#### Remarks

Returns the item stack that has completed charging.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemCompleteUseEvent`](ItemCompleteUseEvent.md).[`itemStack`](ItemCompleteUseEvent.md#itemstack)

***

### source

> `readonly` **source**: [`Player`](Player.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemCompleteUseEvent`](ItemCompleteUseEvent.md).[`source`](ItemCompleteUseEvent.md#source)

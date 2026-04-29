[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemCompleteUseEvent

# Class: ItemCompleteUseEvent

Contains information related to a chargeable item completing
being charged.

## Source

```ts
export class ItemCompleteUseEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
}
```

## Extended by

- [`ItemComponentCompleteUseEvent`](ItemComponentCompleteUseEvent-1.md)

## Constructors

### Constructor

> `private` **new ItemCompleteUseEvent**(): `ItemCompleteUseEvent`

#### Returns

`ItemCompleteUseEvent`

## Properties

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

Returns the item stack that has completed charging.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

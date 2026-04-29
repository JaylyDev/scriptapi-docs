[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemCompleteUseEvent

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

- [`ItemComponentCompleteUseEvent`](ItemComponentCompleteUseEvent.md)

## Constructors

### Constructor

> `private` **new ItemCompleteUseEvent**(): `ItemCompleteUseEvent`

#### Returns

`ItemCompleteUseEvent`

## Properties

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack.md)

#### Remarks

Returns the item stack that has completed charging.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

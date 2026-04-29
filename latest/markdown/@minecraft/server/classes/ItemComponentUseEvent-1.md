[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentUseEvent

# Class: ItemComponentUseEvent

Contains information regarding the use of an item.

## Source

```ts
export class ItemComponentUseEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
}
```

## Constructors

### Constructor

> `private` **new ItemComponentUseEvent**(): `ItemComponentUseEvent`

#### Returns

`ItemComponentUseEvent`

## Properties

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack when the item was used.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

#### Remarks

The player who used the item.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemUseAfterEvent

# Class: ItemUseAfterEvent

Contains information related to an item being used on a
block. This event fires when an item used by a player
successfully triggers an entity interaction.

## Source

```ts
export class ItemUseAfterEvent {
    private constructor();
    itemStack: ItemStack;
    readonly source: Player;
}
```

## Extended by

- [`ItemUseBeforeEvent`](ItemUseBeforeEvent-1.md)

## Constructors

### Constructor

> `private` **new ItemUseAfterEvent**(): `ItemUseAfterEvent`

#### Returns

`ItemUseAfterEvent`

## Properties

### itemStack

> **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The impacted item stack that is being used.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

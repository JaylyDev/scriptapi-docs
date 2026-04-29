[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemStopUseOnAfterEvent

# Class: ItemStopUseOnAfterEvent

Contains information related to an item that has stopped
being used on a block. This event fires when a player
successfully uses an item or places a block by pressing the
Use Item / Place Block button. If multiple blocks are
placed, this event will only occur once at the beginning of
the block placement. Note: This event cannot be used with
Hoe or Axe items.

## Source

```ts
export class ItemStopUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}
```

## Constructors

### Constructor

> `private` **new ItemStopUseOnAfterEvent**(): `ItemStopUseOnAfterEvent`

#### Returns

`ItemStopUseOnAfterEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

The block that the item is used on.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The impacted item stack that is being used on a block.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Player`](Player-1.md)

#### Remarks

Returns the source entity that triggered this item event.

#### World Ready

This property can't be read in early-execution mode.

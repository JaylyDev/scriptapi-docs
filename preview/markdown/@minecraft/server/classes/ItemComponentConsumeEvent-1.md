[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentConsumeEvent

# Class: ItemComponentConsumeEvent

Contains information related to a food item being consumed.

## Source

```ts
export class ItemComponentConsumeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
}
```

## Constructors

### Constructor

> `private` **new ItemComponentConsumeEvent**(): `ItemComponentConsumeEvent`

#### Returns

`ItemComponentConsumeEvent`

## Properties

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack that was consumed.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Entity`](Entity-1.md)

#### Remarks

The source entity that consumed the item.

#### World Ready

This property can't be read in early-execution mode.

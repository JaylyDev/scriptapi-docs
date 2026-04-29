[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemComponentConsumeEvent

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

> `readonly` **itemStack**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack that was consumed.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Entity`](Entity.md)

#### Remarks

The source entity that consumed the item.

#### World Ready

This property can't be read in early-execution mode.

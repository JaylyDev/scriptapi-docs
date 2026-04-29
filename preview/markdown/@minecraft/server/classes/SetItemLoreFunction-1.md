[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / SetItemLoreFunction

# Class: SetItemLoreFunction

Loot item function that modifies the lore of the item
dropped.

## Source

```ts
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    readonly lore: string[];
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetItemLoreFunction**(): `SetItemLoreFunction`

#### Returns

`SetItemLoreFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### lore

> `readonly` **lore**: `string`[]

#### Remarks

The lore to apply to the dropped item.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / SetItemLoreFunction

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

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetItemLoreFunction**(): `SetItemLoreFunction`

#### Returns

`SetItemLoreFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### lore

> `readonly` **lore**: `string`[]

#### Remarks

The lore to apply to the dropped item.

#### World Ready

This property can't be read in early-execution mode.

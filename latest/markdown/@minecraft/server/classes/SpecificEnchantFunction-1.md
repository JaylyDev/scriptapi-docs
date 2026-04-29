[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / SpecificEnchantFunction

# Class: SpecificEnchantFunction

Loot item function that applies one or several predefined
enchants to the dropped item.

## Source

```ts
export class SpecificEnchantFunction extends LootItemFunction {
    private constructor();
    readonly enchantments: EnchantInfo[];
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SpecificEnchantFunction**(): `SpecificEnchantFunction`

#### Returns

`SpecificEnchantFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### enchantments

> `readonly` **enchantments**: [`EnchantInfo`](EnchantInfo-1.md)[]

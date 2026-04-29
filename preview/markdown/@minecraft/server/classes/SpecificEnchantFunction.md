[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SpecificEnchantFunction

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

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SpecificEnchantFunction**(): `SpecificEnchantFunction`

#### Returns

`SpecificEnchantFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### enchantments

> `readonly` **enchantments**: [`EnchantInfo`](EnchantInfo.md)[]

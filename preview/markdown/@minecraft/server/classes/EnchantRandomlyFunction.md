[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EnchantRandomlyFunction

# Class: EnchantRandomlyFunction

Loot item function that randomly enchants the dropped item.

## Source

```ts
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    readonly treasure: boolean;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new EnchantRandomlyFunction**(): `EnchantRandomlyFunction`

#### Returns

`EnchantRandomlyFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### treasure

> `readonly` **treasure**: `boolean`

#### Remarks

Determines whether or not treasure enchantments are included
in the randomly chosen enchantments.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / LootingEnchantFunction

# Class: LootingEnchantFunction

Loot item function that drops extra items if the provided
tool has the looting enchant.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new LootingEnchantFunction**(): `LootingEnchantFunction`

#### Returns

`LootingEnchantFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### count

> `readonly` **count**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
number of extra items to drop. Contains minimum and maximum
values.

#### World Ready

This property can't be read in early-execution mode.

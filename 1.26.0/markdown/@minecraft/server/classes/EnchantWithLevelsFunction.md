[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EnchantWithLevelsFunction

# Class: EnchantWithLevelsFunction

Loot item function that applies a random enchant to the
dropped item.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new EnchantWithLevelsFunction**(): `EnchantWithLevelsFunction`

#### Returns

`EnchantWithLevelsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### levels

> `readonly` **levels**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
level of enchantment to apply. Contains minimum and maximum
values.

#### World Ready

This property can't be read in early-execution mode.

***

### treasure

> `readonly` **treasure**: `boolean`

#### Remarks

Value that determines whether or not treasure enchants
should be included in the random enchant selection.

#### World Ready

This property can't be read in early-execution mode.

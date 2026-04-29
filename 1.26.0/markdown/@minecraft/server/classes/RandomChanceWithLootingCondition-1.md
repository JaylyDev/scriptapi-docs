[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / RandomChanceWithLootingCondition

# Class: RandomChanceWithLootingCondition

Loot item condition that applies a given value to the
chances that loot will drop, modified by the level of
looting enchantment on the tool used.

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new RandomChanceWithLootingCondition**(): `RandomChanceWithLootingCondition`

#### Returns

`RandomChanceWithLootingCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### chance

> `readonly` **chance**: `number`

#### Remarks

The base chance, from 0.0-1.0, that loot will drop. Will be
modified by the 'lootingMultiplier' value.

#### World Ready

This property can't be read in early-execution mode.

***

### lootingMultiplier

> `readonly` **lootingMultiplier**: `number`

#### Remarks

The increase in drop chance per looting enchant level.

#### World Ready

This property can't be read in early-execution mode.

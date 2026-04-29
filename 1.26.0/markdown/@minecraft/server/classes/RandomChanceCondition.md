[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / RandomChanceCondition

# Class: RandomChanceCondition

Loot item condition that applies a given value to the
chances that loot will drop.

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new RandomChanceCondition**(): `RandomChanceCondition`

#### Returns

`RandomChanceCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### chance

> `readonly` **chance**: `number`

#### Remarks

The chance, from 0.0-1.0, that loot will drop.

#### World Ready

This property can't be read in early-execution mode.

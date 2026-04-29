[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / RandomDifficultyChanceCondition

# Class: RandomDifficultyChanceCondition

Loot item condition that applies given values to the chances
that loot will drop based on the current difficulty level.

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new RandomDifficultyChanceCondition**(): `RandomDifficultyChanceCondition`

#### Returns

`RandomDifficultyChanceCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### chances

> `readonly` **chances**: `number`[]

#### Remarks

A four-element array containing the chance of a loot drop
occurring for each difficulty level, in order: Peaceful,
Easy, Normal, Hard.

#### World Ready

This property can't be read in early-execution mode.

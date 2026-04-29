[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityKilledCondition

# Class: EntityKilledCondition

Loot item condition that checks the entity type of the
entity dropping its loot.

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new EntityKilledCondition**(): `EntityKilledCondition`

#### Returns

`EntityKilledCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The entity type required for this condition to pass.
Example: 'minecraft:skeleton'.

#### World Ready

This property can't be read in early-execution mode.

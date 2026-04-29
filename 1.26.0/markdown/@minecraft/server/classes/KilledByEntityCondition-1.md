[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / KilledByEntityCondition

# Class: KilledByEntityCondition

Loot item condition that checks whether or not the drop
source was killed by a specific type of entity.

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new KilledByEntityCondition**(): `KilledByEntityCondition`

#### Returns

`KilledByEntityCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The entity type required for this condition to pass.
Example: 'minecraft:skeleton'.

#### World Ready

This property can't be read in early-execution mode.

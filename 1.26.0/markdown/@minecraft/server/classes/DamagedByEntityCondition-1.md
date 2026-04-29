[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / DamagedByEntityCondition

# Class: DamagedByEntityCondition

Loot item condition that checks whether the loot source was
damaged by a specific type of entity.

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new DamagedByEntityCondition**(): `DamagedByEntityCondition`

#### Returns

`DamagedByEntityCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The entity type required for this condition to pass.

#### World Ready

This property can't be read in early-execution mode.

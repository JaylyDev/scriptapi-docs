[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PassengerOfEntityCondition

# Class: PassengerOfEntityCondition

Loot item condition that checks whether the looting entity
is currently a passenger of a specific type of entity.

## Extends

- [`LootItemCondition`](LootItemCondition.md)

## Constructors

### Constructor

> `private` **new PassengerOfEntityCondition**(): `PassengerOfEntityCondition`

#### Returns

`PassengerOfEntityCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition.md).[`constructor`](LootItemCondition.md#constructor)

## Properties

### entityType

> `readonly` **entityType**: `string`

#### Remarks

The entity type required for this condition to pass.

#### World Ready

This property can't be read in early-execution mode.

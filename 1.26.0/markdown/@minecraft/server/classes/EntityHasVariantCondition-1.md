[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHasVariantCondition

# Class: EntityHasVariantCondition

Loot item condition that checks the variant value of a mob
as it drops its loot.

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new EntityHasVariantCondition**(): `EntityHasVariantCondition`

#### Returns

`EntityHasVariantCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### value

> `readonly` **value**: `number`

#### Remarks

The variant value the mob must have for this condition to
pass.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / SetBannerDetailsFunction

# Class: SetBannerDetailsFunction

Loot item function that modifies the type of a banner that
drops.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetBannerDetailsFunction**(): `SetBannerDetailsFunction`

#### Returns

`SetBannerDetailsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### type

> `readonly` **type**: `number`

#### Remarks

The type of banner to drop.

#### World Ready

This property can't be read in early-execution mode.

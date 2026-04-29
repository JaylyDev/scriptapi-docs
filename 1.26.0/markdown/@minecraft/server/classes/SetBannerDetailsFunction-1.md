[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / SetBannerDetailsFunction

# Class: SetBannerDetailsFunction

Loot item function that modifies the type of a banner that
drops.

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetBannerDetailsFunction**(): `SetBannerDetailsFunction`

#### Returns

`SetBannerDetailsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### type

> `readonly` **type**: `number`

#### Remarks

The type of banner to drop.

#### World Ready

This property can't be read in early-execution mode.

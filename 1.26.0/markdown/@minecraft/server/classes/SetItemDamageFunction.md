[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / SetItemDamageFunction

# Class: SetItemDamageFunction

Loot item function that modifies the durability value of the
item dropped.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetItemDamageFunction**(): `SetItemDamageFunction`

#### Returns

`SetItemDamageFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### damage

> `readonly` **damage**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
durability value to assign. Contains minimum and maximum
values. Must always be between 0.0 and 1.0.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / SetItemNameFunction

# Class: SetItemNameFunction

Loot item function that modifies the name of the item
dropped.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetItemNameFunction**(): `SetItemNameFunction`

#### Returns

`SetItemNameFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### name

> `readonly` **name**: `string`

#### Remarks

The name to apply to the dropped item.

#### World Ready

This property can't be read in early-execution mode.

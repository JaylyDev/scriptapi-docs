[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / RandomBlockStateFunction

# Class: RandomBlockStateFunction

Loot item function that randomly modifies the block state of
the item dropped.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new RandomBlockStateFunction**(): `RandomBlockStateFunction`

#### Returns

`RandomBlockStateFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### blockState

> `readonly` **blockState**: `string`

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### values

> `readonly` **values**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The range from which the function randomly chooses the value
to assign to the given block state. Contains minimum and
maximum values.

#### World Ready

This property can't be read in early-execution mode.

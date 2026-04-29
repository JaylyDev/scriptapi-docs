[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / SetOminousBottleFunction

# Class: SetOminousBottleFunction

Loot item function that modifies an ominous bottle's
amplifier value.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetOminousBottleFunction**(): `SetOminousBottleFunction`

#### Returns

`SetOminousBottleFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### amplifier

> `readonly` **amplifier**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

The value range from which the function randomly chooses the
amplifier value to assign. Contains minimum and maximum
values.

#### World Ready

This property can't be read in early-execution mode.

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / SetArmorTrimFunction

# Class: SetArmorTrimFunction

Loot item function that modifies the trim on a dropped armor
item.

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetArmorTrimFunction**(): `SetArmorTrimFunction`

#### Returns

`SetArmorTrimFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### material

> `readonly` **material**: `string`

#### Remarks

The material to apply to the armor trim.

#### World Ready

This property can't be read in early-execution mode.

***

### pattern

> `readonly` **pattern**: `string`

#### Remarks

The pattern to apply to the armor trim.

#### World Ready

This property can't be read in early-execution mode.

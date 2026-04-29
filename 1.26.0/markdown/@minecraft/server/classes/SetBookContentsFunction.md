[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / SetBookContentsFunction

# Class: SetBookContentsFunction

Loot item function that modifies the contents of a dropped
book.

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetBookContentsFunction**(): `SetBookContentsFunction`

#### Returns

`SetBookContentsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### author

> `readonly` **author**: `string`

#### Remarks

The name of the book's author.

#### World Ready

This property can't be read in early-execution mode.

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

***

### pages

> `readonly` **pages**: `string`[]

#### Remarks

An array of text to be placed in the pages of the book.

#### World Ready

This property can't be read in early-execution mode.

***

### title

> `readonly` **title**: `string`

#### Remarks

The book's title.

#### World Ready

This property can't be read in early-execution mode.

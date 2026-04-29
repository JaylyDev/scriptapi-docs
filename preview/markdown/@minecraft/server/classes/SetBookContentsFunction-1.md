[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / SetBookContentsFunction

# Class: SetBookContentsFunction

Loot item function that modifies the contents of a dropped
book.

## Source

```ts
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    readonly author: string;
    readonly pages: string[];
    readonly title: string;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetBookContentsFunction**(): `SetBookContentsFunction`

#### Returns

`SetBookContentsFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### author

> `readonly` **author**: `string`

#### Remarks

The name of the book's author.

#### World Ready

This property can't be read in early-execution mode.

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

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

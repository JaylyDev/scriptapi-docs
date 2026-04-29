[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / SetPotionFunction

# Class: SetPotionFunction

Loot item function that assigns a type to a dropped potion.

## Source

```ts
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    readonly id: string;
}
```

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new SetPotionFunction**(): `SetPotionFunction`

#### Returns

`SetPotionFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### id

> `readonly` **id**: `string`

#### Remarks

The id to be assigned to the dropped potion.

#### World Ready

This property can't be read in early-execution mode.

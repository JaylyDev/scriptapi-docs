[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SetDataFromColorIndexFunction

# Class: SetDataFromColorIndexFunction

Loot item function that modifies the dropped item's data
value based on its color index. Defaults to zero if no color
index is set.

## Source

```ts
export class SetDataFromColorIndexFunction extends LootItemFunction {
    private constructor();
}
```

## Extends

- [`LootItemFunction`](LootItemFunction.md)

## Constructors

### Constructor

> `private` **new SetDataFromColorIndexFunction**(): `SetDataFromColorIndexFunction`

#### Returns

`SetDataFromColorIndexFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction.md).[`constructor`](LootItemFunction.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction.md).[`conditions`](LootItemFunction.md#conditions)

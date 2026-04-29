[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / RandomChanceCondition

# Class: RandomChanceCondition

Loot item condition that applies a given value to the
chances that loot will drop.

## Source

```ts
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    readonly chance: number;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new RandomChanceCondition**(): `RandomChanceCondition`

#### Returns

`RandomChanceCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### chance

> `readonly` **chance**: `number`

#### Remarks

The chance, from 0.0-1.0, that loot will drop.

#### World Ready

This property can't be read in early-execution mode.

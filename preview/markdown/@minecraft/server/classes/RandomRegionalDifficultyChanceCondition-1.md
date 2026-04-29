[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / RandomRegionalDifficultyChanceCondition

# Class: RandomRegionalDifficultyChanceCondition

Loot item condition that applies a given value to the
chances that loot will drop, modified by the region the drop
is happening within.

## Source

```ts
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    readonly maxChance: number;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new RandomRegionalDifficultyChanceCondition**(): `RandomRegionalDifficultyChanceCondition`

#### Returns

`RandomRegionalDifficultyChanceCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### maxChance

> `readonly` **maxChance**: `number`

#### Remarks

The base chance, from 0.0-1.0, that loot will drop. Will be
modified by the current region's multiplier.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / RandomChanceWithLootingCondition

# Class: RandomChanceWithLootingCondition

Loot item condition that applies a given value to the
chances that loot will drop, modified by the level of
looting enchantment on the tool used.

## Source

```ts
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    readonly chance: number;
    readonly lootingMultiplier: number;
}
```

## Extends

- [`LootItemCondition`](LootItemCondition-1.md)

## Constructors

### Constructor

> `private` **new RandomChanceWithLootingCondition**(): `RandomChanceWithLootingCondition`

#### Returns

`RandomChanceWithLootingCondition`

#### Overrides

[`LootItemCondition`](LootItemCondition-1.md).[`constructor`](LootItemCondition-1.md#constructor)

## Properties

### chance

> `readonly` **chance**: `number`

#### Remarks

The base chance, from 0.0-1.0, that loot will drop. Will be
modified by the 'lootingMultiplier' value.

#### World Ready

This property can't be read in early-execution mode.

***

### lootingMultiplier

> `readonly` **lootingMultiplier**: `number`

#### Remarks

The increase in drop chance per looting enchant level.

#### World Ready

This property can't be read in early-execution mode.

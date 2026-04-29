[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / LootPool

# Class: LootPool

A collection of entries which individually determine loot
drops. Can contain values determining drop outcomes,
including rolls, bonus rolls and tiers.

## Source

```ts
export class LootPool {
    private constructor();
    readonly bonusRolls: minecraftcommon.NumberRange;
    readonly conditions: LootItemCondition[];
    readonly entries: LootPoolEntry[];
    readonly rolls: minecraftcommon.NumberRange;
    readonly tiers?: LootPoolTiers;
}
```

## Constructors

### Constructor

> `private` **new LootPool**(): `LootPool`

#### Returns

`LootPool`

## Properties

### bonusRolls

> `readonly` **bonusRolls**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

Returns the number of extra times a loot pool will be rolled
based on the player's luck level, represented as a range
from minimum to maximum rolls.

#### World Ready

This property can't be read in early-execution mode.

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

***

### entries

> `readonly` **entries**: [`LootPoolEntry`](LootPoolEntry.md)[]

#### Remarks

Gets a complete list of all loot pool entries contained in
the loot pool.

#### World Ready

This property can't be read in early-execution mode.

***

### rolls

> `readonly` **rolls**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

Returns the number of times a loot pool will be rolled,
represented as a range from minimum to maximum rolls.

#### World Ready

This property can't be read in early-execution mode.

***

### tiers?

> `readonly` `optional` **tiers?**: [`LootPoolTiers`](LootPoolTiers.md)

#### Remarks

Gets the loot pool tier values for a given table if they
exist.

#### World Ready

This property can't be read in early-execution mode.

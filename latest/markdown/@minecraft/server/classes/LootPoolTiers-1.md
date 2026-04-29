[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / LootPoolTiers

# Class: LootPoolTiers

Represents the values which determine loot drops in a tiered
loot pool. Potential drops from tiered loot pools are
ordered, and chosen via logic controlled by the values in
this object.

## Source

```ts
export class LootPoolTiers {
    private constructor();
    readonly bonusChance: number;
    readonly bonusRolls: number;
    readonly initialRange: number;
}
```

## Constructors

### Constructor

> `private` **new LootPoolTiers**(): `LootPoolTiers`

#### Returns

`LootPoolTiers`

## Properties

### bonusChance

> `readonly` **bonusChance**: `number`

#### Remarks

The chance for each bonus roll attempt to upgrade the tier
of the dropped item.

#### World Ready

This property can't be read in early-execution mode.

***

### bonusRolls

> `readonly` **bonusRolls**: `number`

#### Remarks

The number of attempts for the loot drop to upgrade its
tier, thereby incrementing its position in the loot pool
entry array, resulting in a higher tier drop.

#### World Ready

This property can't be read in early-execution mode.

***

### initialRange

> `readonly` **initialRange**: `number`

#### Remarks

Represents the upper bound for the starting point in
determining which tier of loot to drop. The lower bound is
always 1. For example, a value of 3 would result in the tier
drop logic starting at a randomly selected position in the
loot pool entry array between 1 and 3.

#### World Ready

This property can't be read in early-execution mode.

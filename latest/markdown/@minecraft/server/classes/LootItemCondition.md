[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / LootItemCondition

# Class: LootItemCondition

An abstract base class from which all loot item conditions
are derived. A loot item condition is a set of rules or
requirements which must be met for a loot drop to happen.

## Source

```ts
export class LootItemCondition {
    private constructor();
}
```

## Extended by

- [`DamagedByEntityCondition`](DamagedByEntityCondition.md)
- [`EntityHasMarkVariantCondition`](EntityHasMarkVariantCondition.md)
- [`EntityHasVariantCondition`](EntityHasVariantCondition.md)
- [`EntityKilledCondition`](EntityKilledCondition.md)
- [`IsBabyCondition`](IsBabyCondition.md)
- [`KilledByEntityCondition`](KilledByEntityCondition.md)
- [`KilledByPlayerCondition`](KilledByPlayerCondition.md)
- [`KilledByPlayerOrPetsCondition`](KilledByPlayerOrPetsCondition.md)
- [`MatchToolCondition`](MatchToolCondition.md)
- [`PassengerOfEntityCondition`](PassengerOfEntityCondition.md)
- [`RandomChanceCondition`](RandomChanceCondition.md)
- [`RandomChanceWithLootingCondition`](RandomChanceWithLootingCondition.md)
- [`RandomDifficultyChanceCondition`](RandomDifficultyChanceCondition.md)
- [`RandomRegionalDifficultyChanceCondition`](RandomRegionalDifficultyChanceCondition.md)

## Constructors

### Constructor

> `private` **new LootItemCondition**(): `LootItemCondition`

#### Returns

`LootItemCondition`

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / LootItemFunction

# Class: LootItemFunction

An abstract base class from which all loot item functions
are derived. Loot item functions can modify loot drops in a
variety of ways as they happen, optionally dependent on a
set of conditions which must be met.

## Source

```ts
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}
```

## Extended by

- [`EnchantRandomEquipmentFunction`](EnchantRandomEquipmentFunction-1.md)
- [`EnchantRandomlyFunction`](EnchantRandomlyFunction-1.md)
- [`EnchantWithLevelsFunction`](EnchantWithLevelsFunction-1.md)
- [`ExplorationMapFunction`](ExplorationMapFunction-1.md)
- [`ExplosionDecayFunction`](ExplosionDecayFunction-1.md)
- [`FillContainerFunction`](FillContainerFunction-1.md)
- [`LootingEnchantFunction`](LootingEnchantFunction-1.md)
- [`RandomAuxValueFunction`](RandomAuxValueFunction-1.md)
- [`RandomBlockStateFunction`](RandomBlockStateFunction-1.md)
- [`RandomDyeFunction`](RandomDyeFunction-1.md)
- [`SetArmorTrimFunction`](SetArmorTrimFunction-1.md)
- [`SetBannerDetailsFunction`](SetBannerDetailsFunction-1.md)
- [`SetBookContentsFunction`](SetBookContentsFunction-1.md)
- [`SetDataFromColorIndexFunction`](SetDataFromColorIndexFunction-1.md)
- [`SetItemCountFunction`](SetItemCountFunction-1.md)
- [`SetItemDamageFunction`](SetItemDamageFunction-1.md)
- [`SetItemDataFunction`](SetItemDataFunction-1.md)
- [`SetItemLoreFunction`](SetItemLoreFunction-1.md)
- [`SetItemNameFunction`](SetItemNameFunction-1.md)
- [`SetOminousBottleFunction`](SetOminousBottleFunction-1.md)
- [`SetPotionFunction`](SetPotionFunction-1.md)
- [`SetSpawnEggFunction`](SetSpawnEggFunction-1.md)
- [`SetStewEffectFunction`](SetStewEffectFunction-1.md)
- [`SmeltItemFunction`](SmeltItemFunction-1.md)
- [`SpecificEnchantFunction`](SpecificEnchantFunction-1.md)

## Constructors

### Constructor

> `private` **new LootItemFunction**(): `LootItemFunction`

#### Returns

`LootItemFunction`

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / LootItemFunction

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

- [`EnchantRandomEquipmentFunction`](EnchantRandomEquipmentFunction.md)
- [`EnchantRandomlyFunction`](EnchantRandomlyFunction.md)
- [`EnchantWithLevelsFunction`](EnchantWithLevelsFunction.md)
- [`ExplorationMapFunction`](ExplorationMapFunction.md)
- [`ExplosionDecayFunction`](ExplosionDecayFunction.md)
- [`FillContainerFunction`](FillContainerFunction.md)
- [`LootingEnchantFunction`](LootingEnchantFunction.md)
- [`RandomAuxValueFunction`](RandomAuxValueFunction.md)
- [`RandomBlockStateFunction`](RandomBlockStateFunction.md)
- [`RandomDyeFunction`](RandomDyeFunction.md)
- [`SetArmorTrimFunction`](SetArmorTrimFunction.md)
- [`SetBannerDetailsFunction`](SetBannerDetailsFunction.md)
- [`SetBookContentsFunction`](SetBookContentsFunction.md)
- [`SetDataFromColorIndexFunction`](SetDataFromColorIndexFunction.md)
- [`SetItemCountFunction`](SetItemCountFunction.md)
- [`SetItemDamageFunction`](SetItemDamageFunction.md)
- [`SetItemDataFunction`](SetItemDataFunction.md)
- [`SetItemLoreFunction`](SetItemLoreFunction.md)
- [`SetItemNameFunction`](SetItemNameFunction.md)
- [`SetOminousBottleFunction`](SetOminousBottleFunction.md)
- [`SetPotionFunction`](SetPotionFunction.md)
- [`SetSpawnEggFunction`](SetSpawnEggFunction.md)
- [`SetStewEffectFunction`](SetStewEffectFunction.md)
- [`SmeltItemFunction`](SmeltItemFunction.md)
- [`SpecificEnchantFunction`](SpecificEnchantFunction.md)

## Constructors

### Constructor

> `private` **new LootItemFunction**(): `LootItemFunction`

#### Returns

`LootItemFunction`

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition.md)[]

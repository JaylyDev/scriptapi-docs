[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EnchantRandomEquipmentFunction

# Class: EnchantRandomEquipmentFunction

Loot item function that applies a random enchant to the
dropped item using the same algorithm used while enchanting
equipment vanilla mobs spawn with.

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new EnchantRandomEquipmentFunction**(): `EnchantRandomEquipmentFunction`

#### Returns

`EnchantRandomEquipmentFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### chance

> `readonly` **chance**: `number`

#### Remarks

Value that determines the likelihood of equipment being
enchanted.

#### World Ready

This property can't be read in early-execution mode.

***

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

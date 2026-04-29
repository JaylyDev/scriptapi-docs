[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ExplorationMapFunction

# Class: ExplorationMapFunction

Loot item function that modifies a dropped treasure map to
mark a location.

## Extends

- [`LootItemFunction`](LootItemFunction-1.md)

## Constructors

### Constructor

> `private` **new ExplorationMapFunction**(): `ExplorationMapFunction`

#### Returns

`ExplorationMapFunction`

#### Overrides

[`LootItemFunction`](LootItemFunction-1.md).[`constructor`](LootItemFunction-1.md#constructor)

## Properties

### conditions

> `readonly` **conditions**: [`LootItemCondition`](LootItemCondition-1.md)[]

#### Inherited from

[`LootItemFunction`](LootItemFunction-1.md).[`conditions`](LootItemFunction-1.md#conditions)

***

### destination

> `readonly` **destination**: `string`

#### Remarks

Determines which type of treasure map will drop.

#### World Ready

This property can't be read in early-execution mode.

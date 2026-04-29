[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / LootPoolEntry

# Class: LootPoolEntry

Represents one entry within Loot Table, which describes one
possible drop when a loot drop occurs. Can contain an item,
another loot table, a path to another loot table, or an
empty drop.

## Extended by

- [`EmptyLootItem`](EmptyLootItem-1.md)
- [`LootItem`](LootItem-1.md)
- [`LootTableEntry`](LootTableEntry-1.md)
- [`LootTableReference`](LootTableReference-1.md)

## Constructors

### Constructor

> `private` **new LootPoolEntry**(): `LootPoolEntry`

#### Returns

`LootPoolEntry`

## Properties

### quality

> `readonly` **quality**: `number`

#### Remarks

Gets the quality of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

***

### subTable?

> `readonly` `optional` **subTable?**: `LootPoolEntry`

#### Remarks

Gets the subtable of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

***

### weight

> `readonly` **weight**: `number`

#### Remarks

Gets the weight of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

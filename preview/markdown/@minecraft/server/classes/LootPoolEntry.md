[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / LootPoolEntry

# Class: LootPoolEntry

Represents one entry within Loot Table, which describes one
possible drop when a loot drop occurs. Can contain an item,
another loot table, a path to another loot table, or an
empty drop.

## Source

```ts
export class LootPoolEntry {
    private constructor();
    readonly quality: number;
    readonly subTable?: LootPoolEntry;
    readonly weight: number;
}
```

## Extended by

- [`EmptyLootItem`](EmptyLootItem.md)
- [`LootItem`](LootItem.md)
- [`LootTableEntry`](LootTableEntry.md)
- [`LootTableReference`](LootTableReference.md)

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

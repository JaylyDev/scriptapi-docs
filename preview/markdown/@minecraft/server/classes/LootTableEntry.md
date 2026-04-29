[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / LootTableEntry

# Class: LootTableEntry

Represents a loot pool entry containing another separate,
nested loot table.

## Source

```ts
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    readonly lootTable: LootTable;
}
```

## Extends

- [`LootPoolEntry`](LootPoolEntry.md)

## Constructors

### Constructor

> `private` **new LootTableEntry**(): `LootTableEntry`

#### Returns

`LootTableEntry`

#### Overrides

[`LootPoolEntry`](LootPoolEntry.md).[`constructor`](LootPoolEntry.md#constructor)

## Properties

### lootTable

> `readonly` **lootTable**: [`LootTable`](LootTable.md)

#### Remarks

Gets the loot table stored as a subtable in the parent loot
pool.

#### World Ready

This property can't be read in early-execution mode.

***

### quality

> `readonly` **quality**: `number`

#### Remarks

Gets the quality of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`LootPoolEntry`](LootPoolEntry.md).[`quality`](LootPoolEntry.md#quality)

***

### subTable?

> `readonly` `optional` **subTable?**: [`LootPoolEntry`](LootPoolEntry.md)

#### Remarks

Gets the subtable of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`LootPoolEntry`](LootPoolEntry.md).[`subTable`](LootPoolEntry.md#subtable)

***

### weight

> `readonly` **weight**: `number`

#### Remarks

Gets the weight of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`LootPoolEntry`](LootPoolEntry.md).[`weight`](LootPoolEntry.md#weight)

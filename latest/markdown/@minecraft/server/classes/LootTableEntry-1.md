[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / LootTableEntry

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

- [`LootPoolEntry`](LootPoolEntry-1.md)

## Constructors

### Constructor

> `private` **new LootTableEntry**(): `LootTableEntry`

#### Returns

`LootTableEntry`

#### Overrides

[`LootPoolEntry`](LootPoolEntry-1.md).[`constructor`](LootPoolEntry-1.md#constructor)

## Properties

### lootTable

> `readonly` **lootTable**: [`LootTable`](LootTable-1.md)

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

[`LootPoolEntry`](LootPoolEntry-1.md).[`quality`](LootPoolEntry-1.md#quality)

***

### subTable?

> `readonly` `optional` **subTable?**: [`LootPoolEntry`](LootPoolEntry-1.md)

#### Remarks

Gets the subtable of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`LootPoolEntry`](LootPoolEntry-1.md).[`subTable`](LootPoolEntry-1.md#subtable)

***

### weight

> `readonly` **weight**: `number`

#### Remarks

Gets the weight of a given loot pool entry.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`LootPoolEntry`](LootPoolEntry-1.md).[`weight`](LootPoolEntry-1.md#weight)

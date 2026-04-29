[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / LootTableReference

# Class: LootTableReference

Represents a loot pool entry containing a reference to
another loot table, described by its path.

## Source

```ts
export class LootTableReference extends LootPoolEntry {
    private constructor();
    readonly path: string;
}
```

## Extends

- [`LootPoolEntry`](LootPoolEntry-1.md)

## Constructors

### Constructor

> `private` **new LootTableReference**(): `LootTableReference`

#### Returns

`LootTableReference`

#### Overrides

[`LootPoolEntry`](LootPoolEntry-1.md).[`constructor`](LootPoolEntry-1.md#constructor)

## Properties

### path

> `readonly` **path**: `string`

#### Remarks

The path to the referenced loot table. Example:
`loot_tables/chests/village/village_bundle.json`

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

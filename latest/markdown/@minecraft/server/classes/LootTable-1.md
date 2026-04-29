[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / LootTable

# Class: LootTable

Represents a single Loot Table, which determines what items
are generated when killing a mob, breaking a block, filling
a container, and more.

## Source

```ts
export class LootTable {
    private constructor();
    readonly path: string;
    readonly pools: LootPool[];
}
```

## Constructors

### Constructor

> `private` **new LootTable**(): `LootTable`

#### Returns

`LootTable`

## Properties

### path

> `readonly` **path**: `string`

#### Remarks

Returns the path to the JSON file that represents this loot
table. Does not include file extension, or 'loot_tables/'
folder prefix. Example: `entities/creeper`.

#### World Ready

This property can't be read in early-execution mode.

***

### pools

> `readonly` **pools**: [`LootPool`](LootPool-1.md)[]

#### Remarks

Returns the array of loot pools on a given loot table.

#### World Ready

This property can't be read in early-execution mode.

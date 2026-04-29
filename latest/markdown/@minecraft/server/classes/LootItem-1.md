[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / LootItem

# Class: LootItem

Represents a loot pool entry containing an item to drop.

## Source

```ts
export class LootItem extends LootPoolEntry {
    private constructor();
    readonly functions: LootItemFunction[];
    readonly name?: ItemType;
}
```

## Extends

- [`LootPoolEntry`](LootPoolEntry-1.md)

## Constructors

### Constructor

> `private` **new LootItem**(): `LootItem`

#### Returns

`LootItem`

#### Overrides

[`LootPoolEntry`](LootPoolEntry-1.md).[`constructor`](LootPoolEntry-1.md#constructor)

## Properties

### functions

> `readonly` **functions**: [`LootItemFunction`](LootItemFunction-1.md)[]

***

### name?

> `readonly` `optional` **name?**: [`ItemType`](ItemType-1.md)

#### Remarks

The name of the item contained in this entry.

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

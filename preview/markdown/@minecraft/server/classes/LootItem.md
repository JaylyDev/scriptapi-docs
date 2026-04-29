[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / LootItem

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

- [`LootPoolEntry`](LootPoolEntry.md)

## Constructors

### Constructor

> `private` **new LootItem**(): `LootItem`

#### Returns

`LootItem`

#### Overrides

[`LootPoolEntry`](LootPoolEntry.md).[`constructor`](LootPoolEntry.md#constructor)

## Properties

### functions

> `readonly` **functions**: [`LootItemFunction`](LootItemFunction.md)[]

***

### name?

> `readonly` `optional` **name?**: [`ItemType`](ItemType.md)

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

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EmptyLootItem

# Class: EmptyLootItem

Represents a completely empty entry in a loot pool. If this
entry is chosen, no items will drop.

## Source

```ts
export class EmptyLootItem extends LootPoolEntry {
    private constructor();
}
```

## Extends

- [`LootPoolEntry`](LootPoolEntry.md)

## Constructors

### Constructor

> `private` **new EmptyLootItem**(): `EmptyLootItem`

#### Returns

`EmptyLootItem`

#### Overrides

[`LootPoolEntry`](LootPoolEntry.md).[`constructor`](LootPoolEntry.md#constructor)

## Properties

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

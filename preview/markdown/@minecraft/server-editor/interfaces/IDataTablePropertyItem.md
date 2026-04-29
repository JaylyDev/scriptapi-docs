[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IDataTablePropertyItem

# Interface: IDataTablePropertyItem

A property item which supports data entries displayed in a
table

## Source

```ts
export interface IDataTablePropertyItem extends IPropertyItemBase {
    updateEntries(data: IDataTablePropertyItemEntry[][]): void;
    updateEntry(data: IDataTablePropertyItemEntry, row: number, column: number): void;
    updateRow(data: IDataTablePropertyItemEntry[], row: number): void;
}
```

## Extends

- [`IPropertyItemBase`](IPropertyItemBase.md)

## Properties

### enable

> **enable**: `boolean`

#### Remarks

If the item is enabled in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`enable`](IPropertyItemBase.md#enable)

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the property item.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`id`](IPropertyItemBase.md#id)

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

The parent pane id.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`paneId`](IPropertyItemBase.md#paneid)

***

### typeName

> `readonly` **typeName**: [`PropertyItemType`](../enumerations/PropertyItemType.md)

#### Remarks

The type name of the target property.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`typeName`](IPropertyItemBase.md#typename)

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### updateEntries()

> **updateEntries**(`data`): `void`

#### Parameters

##### data

[`IDataTablePropertyItemEntry`](IDataTablePropertyItemEntry.md)[][]

New data entries.

#### Returns

`void`

#### Remarks

Update table entries

***

### updateEntry()

> **updateEntry**(`data`, `row`, `column`): `void`

#### Parameters

##### data

[`IDataTablePropertyItemEntry`](IDataTablePropertyItemEntry.md)

New data entry.

##### row

`number`

Cell row index.

##### column

`number`

Cell column index.

#### Returns

`void`

#### Remarks

Update table cell entry

***

### updateRow()

> **updateRow**(`data`, `row`): `void`

#### Parameters

##### data

[`IDataTablePropertyItemEntry`](IDataTablePropertyItemEntry.md)[]

New data entries.

##### row

`number`

Cell row index.

#### Returns

`void`

#### Remarks

Update table row entries

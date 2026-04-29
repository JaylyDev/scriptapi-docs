[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IBlockTablePropertyItem

# Interface: IBlockTablePropertyItem

A property item which supports Block Table properties

## Source

```ts
export interface IBlockTablePropertyItem extends IPropertyItemBase {
    addOrUpdateEntry(block: string | minecraftserver.BlockType, blockInfo: IBlockTableEntryInfo): void;
    deleteEntry(block: string): void;
    getEntry(block: string | minecraftserver.BlockType): IBlockTableEntryInfo | undefined;
    setTitle(title: LocalizedString): void;
    updateEntries(entries: Map<string, IBlockTableEntryInfo>): void;
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

### addOrUpdateEntry()

> **addOrUpdateEntry**(`block`, `blockInfo`): `void`

#### Parameters

##### block

`string` \| [`BlockType`](../../server/classes/BlockType.md)

a new entry in the block table.

##### blockInfo

[`IBlockTableEntryInfo`](IBlockTableEntryInfo.md)

block info for the entry in the block table.

#### Returns

`void`

#### Remarks

Create new or update an existing entry in the block table

***

### deleteEntry()

> **deleteEntry**(`block`): `void`

#### Parameters

##### block

`string`

an entry in the block table.

#### Returns

`void`

#### Remarks

Delete entry in the block table, by block name

***

### getEntry()

> **getEntry**(`block`): [`IBlockTableEntryInfo`](IBlockTableEntryInfo.md) \| `undefined`

#### Parameters

##### block

`string` \| [`BlockType`](../../server/classes/BlockType.md)

an entry in the block table.

#### Returns

[`IBlockTableEntryInfo`](IBlockTableEntryInfo.md) \| `undefined`

#### Remarks

Read entry from the block table, by block name

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md)

New title.

#### Returns

`void`

#### Remarks

Updates title of the property item.

***

### updateEntries()

> **updateEntries**(`entries`): `void`

#### Parameters

##### entries

`Map`\<`string`, [`IBlockTableEntryInfo`](IBlockTableEntryInfo.md)\>

The new value for the block table.

#### Returns

`void`

#### Remarks

Update the block table entries

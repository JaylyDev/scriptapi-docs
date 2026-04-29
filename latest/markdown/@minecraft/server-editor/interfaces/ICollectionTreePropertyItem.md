[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreePropertyItem

# Interface: ICollectionTreePropertyItem

A property item which supports creating nested folders of
collection items

## Source

```ts
export interface ICollectionTreePropertyItem extends IPropertyItemBase {
    readonly folderCount: number;
    readonly viewSortType: CollectionTreeSortType;
    addFolder(options: ICollectionTreeFolderOptions): ICollectionTreeFolder;
    forEachFolder(callback: (folder: ICollectionTreeFolder) => boolean): void;
    getFolder(id: string): ICollectionTreeFolder | undefined;
    setViewSortType(sortType: CollectionTreeSortType | undefined): void;
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

### folderCount

> `readonly` **folderCount**: `number`

#### Remarks

Count of the child folders

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

### viewSortType

> `readonly` **viewSortType**: [`CollectionTreeSortType`](../enumerations/CollectionTreeSortType.md)

#### Remarks

Sort type for the folders.

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### addFolder()

> **addFolder**(`options`): [`ICollectionTreeFolder`](ICollectionTreeFolder.md)

#### Parameters

##### options

[`ICollectionTreeFolderOptions`](../type-aliases/ICollectionTreeFolderOptions.md)

Options to create a folder

#### Returns

[`ICollectionTreeFolder`](ICollectionTreeFolder.md)

#### Remarks

Creates a new folder at the root of the collection

***

### forEachFolder()

> **forEachFolder**(`callback`): `void`

#### Parameters

##### callback

(`folder`) => `boolean`

Returning false will stop the iteration

#### Returns

`void`

#### Remarks

Iterates over the first layer of folders

***

### getFolder()

> **getFolder**(`id`): [`ICollectionTreeFolder`](ICollectionTreeFolder.md) \| `undefined`

#### Parameters

##### id

`string`

Identifier of the folder

#### Returns

[`ICollectionTreeFolder`](ICollectionTreeFolder.md) \| `undefined`

#### Remarks

Find the folder with the id if it exists at the root

***

### setViewSortType()

> **setViewSortType**(`sortType`): `void`

#### Parameters

##### sortType

[`CollectionTreeSortType`](../enumerations/CollectionTreeSortType.md) \| `undefined`

New sort type

#### Returns

`void`

#### Remarks

Updates the folder sort type for the whole view

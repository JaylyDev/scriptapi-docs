[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeFolderOptions

# Type Alias: ICollectionTreeFolderOptions

> **ICollectionTreeFolderOptions** = `object`

Contains collection folders and entries

## Properties

### action?

> `optional` **action?**: [`ICollectionTreeFolderHeaderActionParams`](ICollectionTreeFolderHeaderActionParams.md)

***

### color?

> `optional` **color?**: [`RGBA`](../../server/interfaces/RGBA.md)

***

### expanded?

> `optional` **expanded?**: `boolean`

***

### menu?

> `optional` **menu?**: [`IMenuCreationParams`](../interfaces/IMenuCreationParams.md)[]

***

### onBeforeEntryRemoved?

> `optional` **onBeforeEntryRemoved?**: (`entry`) => `boolean`

#### Parameters

##### entry

[`ICollectionTreeEntry`](../interfaces/ICollectionTreeEntry.md)

#### Returns

`boolean`

***

### onBeforeRemoved?

> `optional` **onBeforeRemoved?**: (`folder`) => `boolean`

#### Parameters

##### folder

[`ICollectionTreeFolder`](../interfaces/ICollectionTreeFolder.md)

#### Returns

`boolean`

***

### onMenuClicked?

> `optional` **onMenuClicked?**: (`menuId`, `folder`) => `void`

#### Parameters

##### menuId

`string`

##### folder

[`ICollectionTreeFolder`](../interfaces/ICollectionTreeFolder.md)

#### Returns

`void`

***

### onSelectedChange?

> `optional` **onSelectedChange?**: (`selected`, `folder`) => `void`

#### Parameters

##### selected

`boolean`

##### folder

[`ICollectionTreeFolder`](../interfaces/ICollectionTreeFolder.md)

#### Returns

`void`

***

### removable?

> `optional` **removable?**: `boolean`

***

### selectable?

> `optional` **selectable?**: `boolean`

***

### selected?

> `optional` **selected?**: `boolean`

***

### title?

> `optional` **title?**: [`LocalizedString`](LocalizedString.md)

***

### uniqueId?

> `optional` **uniqueId?**: `string`

***

### userData?

> `optional` **userData?**: `unknown`

***

### visible?

> `optional` **visible?**: `boolean`

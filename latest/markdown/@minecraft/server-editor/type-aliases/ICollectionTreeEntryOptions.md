[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntryOptions

# Type Alias: ICollectionTreeEntryOptions

> **ICollectionTreeEntryOptions** = `object`

Options to create an entry in a collection tree folder

## Properties

### color?

> `optional` **color?**: [`RGBA`](../../server/interfaces/RGBA.md)

***

### image?

> `optional` **image?**: [`ImageResourceData`](ImageResourceData.md)

***

### onSelectedChange?

> `optional` **onSelectedChange?**: (`selected`, `folder`) => `void`

#### Parameters

##### selected

`boolean`

##### folder

[`ICollectionTreeEntry`](../interfaces/ICollectionTreeEntry.md)

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

### userData?

> `optional` **userData?**: `unknown`

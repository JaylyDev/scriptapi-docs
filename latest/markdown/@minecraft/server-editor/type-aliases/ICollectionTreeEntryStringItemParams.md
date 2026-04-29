[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntryStringItemParams

# Type Alias: ICollectionTreeEntryStringItemParams

> **ICollectionTreeEntryStringItemParams** = `object`

Parameters to create string field in a collection tree entry

## Properties

### enabled?

> `optional` **enabled?**: `boolean`

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`, `item`) => `void`

#### Parameters

##### newValue

`string`

##### oldValue

`string`

##### item

[`ICollectionTreeEntryStringItem`](../interfaces/ICollectionTreeEntryStringItem.md)

#### Returns

`void`

***

### title?

> `optional` **title?**: [`LocalizedString`](LocalizedString.md)

***

### tooltip?

> `optional` **tooltip?**: [`BasicTooltipContent`](BasicTooltipContent.md)

***

### value

> **value**: [`IObservableProp`](IObservableProp.md)\<`string`\>

***

### visible?

> `optional` **visible?**: `boolean`

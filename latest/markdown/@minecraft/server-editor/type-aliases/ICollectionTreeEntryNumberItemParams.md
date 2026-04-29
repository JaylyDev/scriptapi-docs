[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntryNumberItemParams

# Type Alias: ICollectionTreeEntryNumberItemParams

> **ICollectionTreeEntryNumberItemParams** = `object`

Parameters to create number field in a collection tree entry

## Properties

### enabled?

> `optional` **enabled?**: `boolean`

***

### isInteger?

> `optional` **isInteger?**: `boolean`

***

### max?

> `optional` **max?**: `number`

***

### min?

> `optional` **min?**: `number`

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`, `item`) => `void`

#### Parameters

##### newValue

`number`

##### oldValue

`number`

##### item

[`ICollectionTreeEntryNumberItem`](../interfaces/ICollectionTreeEntryNumberItem.md)

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

> **value**: [`IObservableProp`](IObservableProp.md)\<`number`\>

***

### visible?

> `optional` **visible?**: `boolean`

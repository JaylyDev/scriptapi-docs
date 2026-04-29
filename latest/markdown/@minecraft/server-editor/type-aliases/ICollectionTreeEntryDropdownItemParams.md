[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntryDropdownItemParams

# Type Alias: ICollectionTreeEntryDropdownItemParams

> **ICollectionTreeEntryDropdownItemParams** = `object`

Parameters to create dropdown in a collection tree entry

## Properties

### enabled?

> `optional` **enabled?**: `boolean`

***

### menuOptions?

> `optional` **menuOptions?**: [`ICollectionTreeEntryDropdownItemMenuOption`](ICollectionTreeEntryDropdownItemMenuOption.md)[]

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`, `item`) => `void`

#### Parameters

##### newValue

`string`

##### oldValue

`string`

##### item

[`ICollectionTreeEntryDropdownItem`](../interfaces/ICollectionTreeEntryDropdownItem.md)

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

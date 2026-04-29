[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ListPaneBoolEntryParams

# Type Alias: ListPaneBoolEntryParams

> **ListPaneBoolEntryParams** = `object`

List Pane Bool entry creation parameter

## Properties

### enabled?

> `optional` **enabled?**: `boolean`

***

### icon?

> `optional` **icon?**: `string`

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`, `entry`) => `void`

#### Parameters

##### newValue

`boolean`

##### oldValue

`boolean`

##### entry

[`IListPaneBoolEntry`](../interfaces/IListPaneBoolEntry.md)

#### Returns

`void`

***

### tooltip?

> `optional` **tooltip?**: [`BasicTooltipContent`](BasicTooltipContent.md)

***

### type

> **type**: [`Bool`](../enumerations/ListPaneEntryType.md#bool)

***

### value

> **value**: [`IObservableProp`](IObservableProp.md)\<`boolean`\>

***

### visible?

> `optional` **visible?**: `boolean`

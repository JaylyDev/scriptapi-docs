[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IToggleGroupPropertyItem

# Interface: IToggleGroupPropertyItem

A property item which supports toggle button properties

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

### value

> `readonly` **value**: `number`

#### Remarks

Current selected entry value.

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### getEntryByIndex()

> **getEntryByIndex**(`index`): [`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md) \| `undefined`

#### Parameters

##### index

`number`

Index of the toggle entry in the list.

#### Returns

[`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md) \| `undefined`

#### Remarks

Find a toggle entry at an index in the group.

***

### getEntryByValue()

> **getEntryByValue**(`value`): [`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md) \| `undefined`

#### Parameters

##### value

`number`

Value of the toggle entry in the group.

#### Returns

[`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md) \| `undefined`

#### Remarks

Find a toggle entry with a specific value associated with
property item.

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

New title.

#### Returns

`void`

#### Remarks

Updates title of the property item.

***

### setTooltip()

> **setTooltip**(`tooltip`): `void`

#### Parameters

##### tooltip

[`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md) \| `undefined`

New tooltip.

#### Returns

`void`

#### Remarks

Updates tooltip of the property item.

***

### updateEntries()

> **updateEntries**(`entries`, `newValue?`): `void`

#### Parameters

##### entries

[`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md)[]

New list of updated entries.

##### newValue?

`number`

New value value to use for the selected toggle button.

#### Returns

`void`

#### Remarks

Update list of toggle group entries.

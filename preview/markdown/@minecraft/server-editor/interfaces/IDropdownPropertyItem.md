[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IDropdownPropertyItem

# Interface: IDropdownPropertyItem

A property item which supports Dropdown properties

## Source

```ts
export interface IDropdownPropertyItem extends IPropertyItemBase {
    readonly value: number;
    getEntryByIndex(index: number): IDropdownPropertyItemEntry | undefined;
    getEntryByValue(value: number): IDropdownPropertyItemEntry | undefined;
    setTitle(title: LocalizedString | undefined): void;
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    updateEntries(entries: IDropdownPropertyItemEntry[], newValue?: number): void;
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

### value

> `readonly` **value**: `number`

#### Remarks

Current selected entry value of the property item list.

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### getEntryByIndex()

> **getEntryByIndex**(`index`): [`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md) \| `undefined`

#### Parameters

##### index

`number`

Index of the dropdown entry in the list.

#### Returns

[`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md) \| `undefined`

#### Remarks

Find a dropdown entry at an index in the dropdown list.

***

### getEntryByValue()

> **getEntryByValue**(`value`): [`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md) \| `undefined`

#### Parameters

##### value

`number`

Value of the dropdown entry in the list.

#### Returns

[`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md) \| `undefined`

#### Remarks

Find a dropdown entry with a specific value associated with
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

[`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md)[]

New list of updated entries.

##### newValue?

`number`

New value value to use for the dropdown.

#### Returns

`void`

#### Remarks

Update list of dropdown entries.

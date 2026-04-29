[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IMenuPropertyItem

# Interface: IMenuPropertyItem

A property item which supports Menu properties

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

### addEntry()

> **addEntry**(`props`, `action?`): [`IMenu`](IMenu.md)

#### Parameters

##### props

[`IMenuCreationParams`](IMenuCreationParams.md)

Menu creation parameters

##### action?

[`RegisteredAction`](../type-aliases/RegisteredAction.md)\<[`NoArgsAction`](../type-aliases/NoArgsAction.md)\>

Optional action to trigger on menu click

#### Returns

[`IMenu`](IMenu.md)

#### Remarks

Adds a new menu item entry to property item

***

### getEntries()

> **getEntries**(): [`IMenu`](IMenu.md)[]

#### Returns

[`IMenu`](IMenu.md)[]

All first level menu entries

#### Remarks

***

### getMenu()

> **getMenu**(`menuId`): [`IMenu`](IMenu.md) \| `undefined`

#### Parameters

##### menuId

`string`

Identifier of the menu.

#### Returns

[`IMenu`](IMenu.md) \| `undefined`

#### Remarks

Find the menu item recursively if it exists

***

### removeEntry()

> **removeEntry**(`menuId`): `void`

#### Parameters

##### menuId

`string`

Menu id to remove

#### Returns

`void`

#### Remarks

Removed the menu item entry if the id is found

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

Updates tooltip description of property item.

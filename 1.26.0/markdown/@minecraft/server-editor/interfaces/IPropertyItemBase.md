[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPropertyItemBase

# Interface: IPropertyItemBase

Common base for all property items

## Extended by

- [`IBlockListPropertyItem`](IBlockListPropertyItem.md)
- [`IBlockTablePropertyItem`](IBlockTablePropertyItem.md)
- [`IBoolPropertyItem`](IBoolPropertyItem.md)
- [`IButtonPanePropertyItem`](IButtonPanePropertyItem.md)
- [`IButtonPropertyItem`](IButtonPropertyItem.md)
- [`IColorPickerPropertyItem`](IColorPickerPropertyItem.md)
- [`IColorTimelinePropertyItem`](IColorTimelinePropertyItem.md)
- [`IComboBoxPropertyItem`](IComboBoxPropertyItem.md)
- [`IDataTablePropertyItem`](IDataTablePropertyItem.md)
- [`IDropdownPropertyItem`](IDropdownPropertyItem.md)
- [`IImagePropertyItem`](IImagePropertyItem.md)
- [`ILinkPropertyItem`](ILinkPropertyItem.md)
- [`IListPanePropertyItem`](IListPanePropertyItem.md)
- [`IMenuPropertyItem`](IMenuPropertyItem.md)
- [`IMinimapPropertyItem`](IMinimapPropertyItem.md)
- [`INumberPropertyItem`](INumberPropertyItem.md)
- [`INumberTimelinePropertyItem`](INumberTimelinePropertyItem.md)
- [`IProgressIndicatorPropertyItem`](IProgressIndicatorPropertyItem.md)
- [`IStringPropertyItem`](IStringPropertyItem.md)
- [`ISubPanePropertyItem`](ISubPanePropertyItem.md)
- [`ITextPropertyItem`](ITextPropertyItem.md)
- [`IToggleGroupPropertyItem`](IToggleGroupPropertyItem.md)
- [`IVector2PropertyItem`](IVector2PropertyItem.md)
- [`IVector3PropertyItem`](IVector3PropertyItem.md)

## Properties

### enable

> **enable**: `boolean`

#### Remarks

If the item is enabled in the UI.

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the property item.

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

The parent pane id.

***

### typeName

> `readonly` **typeName**: [`PropertyItemType`](../enumerations/PropertyItemType.md)

#### Remarks

The type name of the target property.

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

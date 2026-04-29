[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPropertyItemOptionsBase

# Interface: IPropertyItemOptionsBase

Common optional properties for property items

## Extended by

- [`IBlockListPropertyItemOptions`](IBlockListPropertyItemOptions.md)
- [`IBlockTablePropertyItemOptions`](IBlockTablePropertyItemOptions.md)
- [`IBoolPropertyItemOptions`](IBoolPropertyItemOptions.md)
- [`IButtonPropertyItemOptions`](IButtonPropertyItemOptions.md)
- [`IColorPickerPropertyItemOptions`](IColorPickerPropertyItemOptions.md)
- [`IColorTimelinePropertyItemOptions`](IColorTimelinePropertyItemOptions.md)
- [`IComboBoxPropertyItemOptions`](IComboBoxPropertyItemOptions.md)
- [`IDataTablePropertyItemOptions`](IDataTablePropertyItemOptions.md)
- [`IDropdownPropertyItemOptions`](IDropdownPropertyItemOptions.md)
- [`IImagePropertyItemOptions`](IImagePropertyItemOptions.md)
- [`ILinkPropertyItemOptions`](ILinkPropertyItemOptions.md)
- [`IListPanePropertyItemOptions`](IListPanePropertyItemOptions.md)
- [`IMenuPropertyItemOptions`](IMenuPropertyItemOptions.md)
- [`IMinimapPropertyItemOptions`](IMinimapPropertyItemOptions.md)
- [`INumberPropertyItemOptions`](INumberPropertyItemOptions.md)
- [`INumberTimelinePropertyItemOptions`](INumberTimelinePropertyItemOptions.md)
- [`IProgressIndicatorPropertyItemOptions`](IProgressIndicatorPropertyItemOptions.md)
- [`IStringPropertyItemOptions`](IStringPropertyItemOptions.md)
- [`ITextPropertyItemOptions`](ITextPropertyItemOptions.md)
- [`IToggleGroupPropertyItemOptions`](IToggleGroupPropertyItemOptions.md)
- [`IVector2PropertyItemOptions`](IVector2PropertyItemOptions.md)
- [`IVector3PropertyItemOptions`](IVector3PropertyItemOptions.md)

## Properties

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

***

### style?

> `optional` **style?**: [`PaneItemStyle`](../type-aliases/PaneItemStyle.md)

#### Remarks

Optional styling overrides for the item.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

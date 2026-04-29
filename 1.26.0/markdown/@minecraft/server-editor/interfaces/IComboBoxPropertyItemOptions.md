[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IComboBoxPropertyItemOptions

# Interface: IComboBoxPropertyItemOptions

Optional properties for ComboBox property item

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### dataType?

> `optional` **dataType?**: [`ComboBoxPropertyItemDataType`](../enumerations/ComboBoxPropertyItemDataType.md)

#### Remarks

Possible data types supported by combo box. If undefined, it
will be Custom by default.

***

### defaultValue?

> `optional` **defaultValue?**: `string`

#### Remarks

Default value to fall back to if entry is not found. If
undefined, data type will determine the default value (empty
string for Custom data type).

***

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### entries?

> `optional` **entries?**: [`IComboBoxPropertyItemEntry`](IComboBoxPropertyItemEntry.md)[]

#### Remarks

List of combo box entries. If undefined, data type will
determine the default list (empty list for Custom data
type).

***

### hiddenLabel?

> `optional` **hiddenLabel?**: `boolean`

#### Remarks

If true label text will be hidden. It will be visible by
default.

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`) => `void`

#### Parameters

##### newValue

`string`

##### oldValue

`string`

#### Returns

`void`

#### Remarks

This callback is called when UI control value is changed.

***

### showImage?

> `optional` **showImage?**: `boolean`

#### Remarks

If true the image for the selected value will be displayed
(if data type supports it). If undefined, it will default to
false.

***

### style?

> `optional` **style?**: [`PaneItemStyle`](../type-aliases/PaneItemStyle.md)

#### Remarks

Optional styling overrides for the item.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`style`](IPropertyItemOptionsBase.md#style)

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the property item.

***

### tooltip?

> `optional` **tooltip?**: [`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md)

#### Remarks

Tooltip description of the property item.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

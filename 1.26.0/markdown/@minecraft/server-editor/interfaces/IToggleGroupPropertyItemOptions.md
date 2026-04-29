[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IToggleGroupPropertyItemOptions

# Interface: IToggleGroupPropertyItemOptions

Optional properties for Toggle Group property item

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### entries?

> `optional` **entries?**: [`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md)[]

#### Remarks

List of toggle button entries associated with the property
item. If undefined, list will be empty.

***

### hiddenEntryLabels?

> `optional` **hiddenEntryLabels?**: `boolean`

#### Remarks

If true toggle buttons will be displayed vertically with
their labels. If undefined, labels will be hidden.

***

### hiddenLabel?

> `optional` **hiddenLabel?**: `boolean`

#### Remarks

If true label text will be hidden. It will be visible by
default.

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`, `items`) => `void`

#### Parameters

##### newValue

`number`

##### oldValue

`number`

##### items

[`IToggleGroupPropertyItemEntry`](IToggleGroupPropertyItemEntry.md)[]

#### Returns

`void`

#### Remarks

This callback is called when UI control value is changed.

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

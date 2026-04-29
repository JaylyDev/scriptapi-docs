[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ISubPanePropertyItemOptions

# Interface: ISubPanePropertyItemOptions

Optional properties for Sub Pane property item

## Extends

- [`IPropertyPaneOptions`](IPropertyPaneOptions.md)

## Properties

### alignment?

> `optional` **alignment?**: [`LayoutAlignment`](../enumerations/LayoutAlignment.md)

#### Remarks

Alignment of property items within the pane of the property
pane. If undefined, it will default to Left.

***

### collapsed?

> `optional` **collapsed?**: `boolean`

#### Remarks

Initial expander state of sub pane. If undefined, it will
default to false.

***

### hasExpander?

> `optional` **hasExpander?**: `boolean`

#### Remarks

Determines if sub pane should have an expander. If
undefined, it will default to true.

***

### hasMargins?

> `optional` **hasMargins?**: `boolean`

#### Remarks

Adds additional margins to sub pane. If undefined, it will
default to true.

***

### infoTooltip?

> `optional` **infoTooltip?**: [`TooltipInteractiveContent`](../type-aliases/TooltipInteractiveContent.md)

#### Remarks

Optional information tooltip for the pane to be displayed on
the header.

#### Inherited from

[`IPropertyPaneOptions`](IPropertyPaneOptions.md).[`infoTooltip`](IPropertyPaneOptions.md#infotooltip)

***

### layout?

> `optional` **layout?**: [`PaneLayoutType`](../enumerations/PaneLayoutType.md)

#### Remarks

Determines layout of sub pane property items. If undefined,
it will default to Vertical.

***

### maxHeight?

> `optional` **maxHeight?**: `number`

#### Remarks

Maximum height of the property item.

***

### scrollable?

> `optional` **scrollable?**: `boolean`

#### Remarks

Enables scrolling for the pane if it has a max height
defined.

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the property pane

#### Inherited from

[`IPropertyPaneOptions`](IPropertyPaneOptions.md).[`title`](IPropertyPaneOptions.md#title)

***

### uniqueId?

> `optional` **uniqueId?**: `string`

#### Remarks

Unique identifier for the pane

#### Inherited from

[`IPropertyPaneOptions`](IPropertyPaneOptions.md).[`uniqueId`](IPropertyPaneOptions.md#uniqueid)

***

### width?

> `optional` **width?**: `number` \| [`LayoutSize`](../type-aliases/LayoutSize.md)

#### Remarks

Custom width of the property item.

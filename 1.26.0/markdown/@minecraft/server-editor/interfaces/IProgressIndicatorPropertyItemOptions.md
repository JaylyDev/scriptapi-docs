[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IProgressIndicatorPropertyItemOptions

# Interface: IProgressIndicatorPropertyItemOptions

Optional properties for progress indicator property item

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

### hiddenLabel?

> `optional` **hiddenLabel?**: `boolean`

#### Remarks

If true label text will be hidden. If undefined, the label
will be visible by default.

***

### progress?

> `optional` **progress?**: [`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

#### Remarks

Normalized loading progress (0 to 1).

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

> `optional` **tooltip?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Tooltip description of the property item.

***

### variant?

> `optional` **variant?**: [`ProgressIndicatorPropertyItemVariant`](../enumerations/ProgressIndicatorPropertyItemVariant.md)

#### Remarks

Determines how we display progress indicator. If undefined,
it will default to Spinner.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

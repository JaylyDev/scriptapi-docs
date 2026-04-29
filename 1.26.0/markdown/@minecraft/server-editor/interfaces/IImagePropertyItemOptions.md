[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IImagePropertyItemOptions

# Interface: IImagePropertyItemOptions

Optional properties for Image property item

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### alignment?

> `optional` **alignment?**: [`LayoutAlignment`](../enumerations/LayoutAlignment.md)

#### Remarks

Alignment of the image in the container. If not defined,
LayoutAlignment.Start is used.

***

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### imageSize?

> `optional` **imageSize?**: `number` \| \{ `height`: `number`; `width`: `number`; \}

#### Remarks

Size of the image. If undefined, defaults to 10.

***

### onClick?

> `optional` **onClick?**: (`x`, `y`) => `void`

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Remarks

Called when image is clicked.

***

### style?

> `optional` **style?**: [`PaneItemStyle`](../type-aliases/PaneItemStyle.md)

#### Remarks

Optional styling overrides for the item.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`style`](IPropertyItemOptionsBase.md#style)

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IColorPickerPropertyItemOptions

# Interface: IColorPickerPropertyItemOptions

Optional properties for Color Picker property item

## Source

```ts
export interface IColorPickerPropertyItemOptions extends IPropertyItemOptionsBase {
    hiddenAlpha?: boolean;
    hiddenLabel?: boolean;
    onChange?: (newValue: minecraftserver.RGBA, oldValue: minecraftserver.RGBA) => void;
    title?: LocalizedString;
    tooltip?: LocalizedString;
    variant?: ColorPickerPropertyItemVariant;
}
```

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

### hiddenAlpha?

> `optional` **hiddenAlpha?**: `boolean`

#### Remarks

If true alpha control will be hidden. If undefined, it will
default to false.

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

[`RGBA`](../../server/interfaces/RGBA.md)

##### oldValue

[`RGBA`](../../server/interfaces/RGBA.md)

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

> `optional` **tooltip?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Tooltip description of the property item.

***

### variant?

> `optional` **variant?**: [`ColorPickerPropertyItemVariant`](../enumerations/ColorPickerPropertyItemVariant.md)

#### Remarks

The variant for the button. By default it is Primary.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

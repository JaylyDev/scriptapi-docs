[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IBoolPropertyItemOptions

# Interface: IBoolPropertyItemOptions

Optional properties for Bool property item

## Source

```ts
export interface IBoolPropertyItemOptions extends IPropertyItemOptionsBase {
    checkboxIcon?: string;
    hiddenLabel?: boolean;
    onChange?: (newValue: boolean, oldValue: boolean) => void;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    variant?: BoolPropertyItemVariant;
}
```

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### checkboxIcon?

> `optional` **checkboxIcon?**: `string`

#### Remarks

Changes checkbox variant to use a custom icon

***

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

If true label text will be hidden. It will be visible by
default.

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`) => `void`

#### Parameters

##### newValue

`boolean`

##### oldValue

`boolean`

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

Localized title of the text item.

***

### tooltip?

> `optional` **tooltip?**: [`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md)

#### Remarks

Tooltip description of the property item

***

### variant?

> `optional` **variant?**: [`BoolPropertyItemVariant`](../enumerations/BoolPropertyItemVariant.md)

#### Remarks

Determines how we display bool as a UI element. If
undefined, it will default to Checkbox.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

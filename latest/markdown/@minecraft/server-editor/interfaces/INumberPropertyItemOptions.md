[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / INumberPropertyItemOptions

# Interface: INumberPropertyItemOptions

Optional properties for Number property item

## Source

```ts
export interface INumberPropertyItemOptions extends IPropertyItemOptionsBase {
    hiddenLabel?: boolean;
    isInteger?: boolean;
    max?: number;
    min?: number;
    onChange?: (newValue: number, oldValue: number) => void;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    variant?: NumberPropertyItemVariant;
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

### hiddenLabel?

> `optional` **hiddenLabel?**: `boolean`

#### Remarks

If true label text will be hidden. If undefined, the label
will be visible by default.

***

### isInteger?

> `optional` **isInteger?**: `boolean`

#### Remarks

If we should treat the number as integer. By default is
false.

***

### max?

> `optional` **max?**: `number`

#### Remarks

The min possible number. If undefined,
Number.MAX_SAFE_INTEGER will be used.

***

### min?

> `optional` **min?**: `number`

#### Remarks

The min possible number. If undefined,
Number.MIN_SAFE_INTEGER will be used.

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`) => `void`

#### Parameters

##### newValue

`number`

##### oldValue

`number`

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

### variant?

> `optional` **variant?**: [`NumberPropertyItemVariant`](../enumerations/NumberPropertyItemVariant.md)

#### Remarks

Determines how we display bool as a UI element. If
undefined, it will default to InputField.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

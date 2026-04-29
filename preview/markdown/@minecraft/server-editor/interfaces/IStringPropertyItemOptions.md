[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IStringPropertyItemOptions

# Interface: IStringPropertyItemOptions

Optional properties for String property item

## Source

```ts
export interface IStringPropertyItemOptions extends IPropertyItemOptionsBase {
    hasClearButton?: boolean;
    hiddenLabel?: boolean;
    inlineLabel?: boolean;
    multilineHeight?: number;
    onChange?: (newValue: string, oldValue: string) => void;
    regexPattern?: string;
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
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

### hasClearButton?

> `optional` **hasClearButton?**: `boolean`

#### Remarks

Shows clear button for the item. If undefined, it will be
true.

***

### hiddenLabel?

> `optional` **hiddenLabel?**: `boolean`

#### Remarks

If true label text will be hidden. If undefined, the label
will be visible by default.

***

### inlineLabel?

> `optional` **inlineLabel?**: `boolean`

#### Remarks

Displays label inline. If undefined, it will be true.

***

### multilineHeight?

> `optional` **multilineHeight?**: `number`

#### Remarks

If defined, string will be handled as multiline input.

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

### regexPattern?

> `optional` **regexPattern?**: `string`

#### Remarks

Optional regular expression pattern to validate string.

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

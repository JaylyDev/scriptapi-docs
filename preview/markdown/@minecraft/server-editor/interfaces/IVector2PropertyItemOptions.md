[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IVector2PropertyItemOptions

# Interface: IVector2PropertyItemOptions

Optional properties for Vector2 property item

## Source

```ts
export interface IVector2PropertyItemOptions extends IPropertyItemOptionsBase {
    hasClearButton?: boolean;
    hiddenLabel?: boolean;
    isInteger?: boolean;
    max?: Partial<minecraftserver.Vector2>;
    min?: Partial<minecraftserver.Vector2>;
    onChange?: (newValue: minecraftserver.Vector2, oldValue: minecraftserver.Vector2) => void;
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

If true label text will be hidden. It will be visible by
default.

***

### isInteger?

> `optional` **isInteger?**: `boolean`

#### Remarks

If we should treat the Vector2 properties as integer values.
By default is false.

***

### max?

> `optional` **max?**: `Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Remarks

The min possible limits. If undefined,
Number.MAX_SAFE_INTEGER will be used.

***

### min?

> `optional` **min?**: `Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Remarks

The min possible limits. If undefined,
Number.MIN_SAFE_INTEGER will be used.

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`) => `void`

#### Parameters

##### newValue

[`Vector2`](../../server/interfaces/Vector2.md)

##### oldValue

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`void`

#### Remarks

This callback is called when UI control is changed.

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

Localized title of the property item

***

### tooltip?

> `optional` **tooltip?**: [`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md)

#### Remarks

Tooltip description of the property item

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

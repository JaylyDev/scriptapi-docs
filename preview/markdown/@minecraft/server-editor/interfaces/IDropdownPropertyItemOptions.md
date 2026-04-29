[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IDropdownPropertyItemOptions

# Interface: IDropdownPropertyItemOptions

Optional properties for Dropdown property item

## Source

```ts
export interface IDropdownPropertyItemOptions extends IPropertyItemOptionsBase {
    entries?: IDropdownPropertyItemEntry[];
    hiddenLabel?: boolean;
    inlineLabel?: boolean;
    maxVisibleEntries?: number;
    onChange?: (newValue: number, oldValue: number, items: IDropdownPropertyItemEntry[]) => void;
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

### entries?

> `optional` **entries?**: [`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md)[]

#### Remarks

List of dropdown entries associated with the property item.
If undefined, list will be empty.

***

### hiddenLabel?

> `optional` **hiddenLabel?**: `boolean`

#### Remarks

If true label text will be hidden. It will be visible by
default.

***

### inlineLabel?

> `optional` **inlineLabel?**: `boolean`

#### Remarks

Displays label inline. If undefined, it will be true.

***

### maxVisibleEntries?

> `optional` **maxVisibleEntries?**: `number`

#### Remarks

Determines how many entries can be displayed before
scrolling is enabled, based on available space.

***

### onChange?

> `optional` **onChange?**: (`newValue`, `oldValue`, `items`) => `void`

#### Parameters

##### newValue

`number`

##### oldValue

`number`

##### items

[`IDropdownPropertyItemEntry`](IDropdownPropertyItemEntry.md)[]

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

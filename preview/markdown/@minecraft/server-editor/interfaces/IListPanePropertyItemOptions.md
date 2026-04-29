[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPanePropertyItemOptions

# Interface: IListPanePropertyItemOptions

Optional properties for List Pane property item

## Source

```ts
export interface IListPanePropertyItemOptions extends IPropertyItemOptionsBase {
    defaultSlots?: ListPaneSlotCreationProps[];
    fixedHeight?: boolean;
    height?: number;
    onSlotClicked?: (slot: IListPaneSlot) => void;
    onSlotSelectionChange?: (slot: IListPaneSlot, state: boolean) => void;
    slotConfig: ListPaneSlotConfiguration;
    title?: LocalizedString;
    viewFilter?: ListPaneViewFilter;
    viewSortType?: ListPaneViewSortType;
}
```

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### defaultSlots?

> `optional` **defaultSlots?**: [`ListPaneSlotCreationProps`](../type-aliases/ListPaneSlotCreationProps.md)[]

#### Remarks

Default slots to initialize the list with. If undefined, the
list will be empty.

***

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### fixedHeight?

> `optional` **fixedHeight?**: `boolean`

#### Remarks

If true, pane height will not change based on slot count. If
undefined, it will default to false

***

### height?

> `optional` **height?**: `number`

#### Remarks

This will be the height of the list within the pane

***

### onSlotClicked?

> `optional` **onSlotClicked?**: (`slot`) => `void`

#### Parameters

##### slot

[`IListPaneSlot`](IListPaneSlot.md)

#### Returns

`void`

#### Remarks

This callback is fired whenever a clickable slot is pressed

***

### onSlotSelectionChange?

> `optional` **onSlotSelectionChange?**: (`slot`, `state`) => `void`

#### Parameters

##### slot

[`IListPaneSlot`](IListPaneSlot.md)

##### state

`boolean`

#### Returns

`void`

#### Remarks

This callback is fired whenever selected state of a slot is
changed

***

### slotConfig

> **slotConfig**: [`ListPaneSlotConfiguration`](../type-aliases/ListPaneSlotConfiguration.md)

#### Remarks

Slot configuration for the list. The slot entry layout must
be predefined, and using an incorrect layout while creating
slots will throw an error.

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

### viewFilter?

> `optional` **viewFilter?**: [`ListPaneViewFilter`](../type-aliases/ListPaneViewFilter.md)

#### Remarks

Filter properties for viewing subset of slots.

***

### viewSortType?

> `optional` **viewSortType?**: [`ListPaneViewSortType`](../enumerations/ListPaneViewSortType.md)

#### Remarks

Sort type for the slots in the view. If undefined, default
list order will be used.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)

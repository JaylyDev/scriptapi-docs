[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPanePropertyItemOptions

# Interface: IListPanePropertyItemOptions

Optional properties for List Pane property item

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### defaultSlots?

> `optional` **defaultSlots?**: [`ListPaneSlotCreationProps`](../type-aliases/ListPaneSlotCreationProps.md)[]

#### Remarks

This will be the height of the list withing the pane

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

This will be the height of the list withing the pane

***

### layout

> **layout**: [`ListPaneSlotLayout`](../type-aliases/ListPaneSlotLayout.md)

#### Remarks

Layout for the list will need to be predefined, and using
wrong layout shape while creating slots will throw

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

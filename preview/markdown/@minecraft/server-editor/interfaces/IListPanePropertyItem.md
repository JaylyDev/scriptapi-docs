[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPanePropertyItem

# Interface: IListPanePropertyItem

A property item which supports Sub Pane properties

## Source

```ts
export interface IListPanePropertyItem extends IPropertyItemBase, IPane {
    readonly slotCount: number;
    readonly viewControlPane: IListViewControlPane | undefined;
    readonly viewSortType: ListPaneViewSortType;
    addSlot(params: ListPaneSlotCreationProps): IListPaneSlot;
    buildViewControl(options: IListPaneViewControlPaneOptions): IListViewControlPane;
    getSlotById(id: string): IListPaneSlot | undefined;
    getSlotByIndex(index: number): IListPaneSlot | undefined;
    getViewFilter(): ListPaneViewFilter | undefined;
    removeSlot(id: string): void;
    selectSlot(id: string, deselectOtherSlots?: boolean): void;
    setViewFilter(filter: ListPaneViewFilter | undefined): void;
    setViewSortType(sortType: ListPaneViewSortType | undefined): void;
    updateSlots(newSlots: ListPaneSlotCreationProps[]): void;
}
```

## Extends

- [`IPropertyItemBase`](IPropertyItemBase.md).[`IPane`](IPane.md)

## Properties

### enable

> **enable**: `boolean`

#### Remarks

If the item is enabled in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`enable`](IPropertyItemBase.md#enable)

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the property item.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`id`](IPropertyItemBase.md#id)

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

The parent pane id.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`paneId`](IPropertyItemBase.md#paneid)

***

### slotCount

> `readonly` **slotCount**: `number`

#### Remarks

Count of the slots managed by the list.

***

### typeName

> `readonly` **typeName**: [`PropertyItemType`](../enumerations/PropertyItemType.md)

#### Remarks

The type name of the target property.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`typeName`](IPropertyItemBase.md#typename)

***

### viewControlPane

> `readonly` **viewControlPane**: [`IListViewControlPane`](IListViewControlPane.md) \| `undefined`

#### Remarks

View control pane for the list

***

### viewSortType

> `readonly` **viewSortType**: [`ListPaneViewSortType`](../enumerations/ListPaneViewSortType.md)

#### Remarks

Current sorting type for the pane slots

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### addSlot()

> **addSlot**(`params`): [`IListPaneSlot`](IListPaneSlot.md)

#### Parameters

##### params

[`ListPaneSlotCreationProps`](../type-aliases/ListPaneSlotCreationProps.md)

#### Returns

[`IListPaneSlot`](IListPaneSlot.md)

#### Remarks

Adds a new slot to the list.

***

### buildViewControl()

> **buildViewControl**(`options`): [`IListViewControlPane`](IListViewControlPane.md)

#### Parameters

##### options

[`IListPaneViewControlPaneOptions`](IListPaneViewControlPaneOptions.md)

#### Returns

[`IListViewControlPane`](IListViewControlPane.md)

#### Remarks

Creates a pane that displays view and filtering
configurations for the list if the parent container supports
it.

***

### getSlotById()

> **getSlotById**(`id`): [`IListPaneSlot`](IListPaneSlot.md) \| `undefined`

#### Parameters

##### id

`string`

Unique identifier of the slot.

#### Returns

[`IListPaneSlot`](IListPaneSlot.md) \| `undefined`

#### Remarks

Finds the slot with the identifier.

***

### getSlotByIndex()

> **getSlotByIndex**(`index`): [`IListPaneSlot`](IListPaneSlot.md) \| `undefined`

#### Parameters

##### index

`number`

Index of the slot in the component list.

#### Returns

[`IListPaneSlot`](IListPaneSlot.md) \| `undefined`

#### Remarks

Finds the slot with the index.

***

### getViewFilter()

> **getViewFilter**(): [`ListPaneViewFilter`](../type-aliases/ListPaneViewFilter.md) \| `undefined`

#### Returns

[`ListPaneViewFilter`](../type-aliases/ListPaneViewFilter.md) \| `undefined`

Active view filter

#### Remarks

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the pane.

#### Inherited from

[`IPane`](IPane.md).[`hide`](IPane.md#hide)

***

### removeSlot()

> **removeSlot**(`id`): `void`

#### Parameters

##### id

`string`

Unique identifier of the slot.

#### Returns

`void`

#### Remarks

Removes the slot from the list.

***

### selectSlot()

> **selectSlot**(`id`, `deselectOtherSlots?`): `void`

#### Parameters

##### id

`string`

Unique identifier of the slot.

##### deselectOtherSlots?

`boolean`

Deselects already selected slots if defined.

#### Returns

`void`

#### Remarks

Selects slot by id.

***

### setViewFilter()

> **setViewFilter**(`filter`): `void`

#### Parameters

##### filter

[`ListPaneViewFilter`](../type-aliases/ListPaneViewFilter.md) \| `undefined`

Slots that don't match filter properties won't be included.

#### Returns

`void`

#### Remarks

Filters displaying slots to match the define properties

***

### setViewSortType()

> **setViewSortType**(`sortType`): `void`

#### Parameters

##### sortType

[`ListPaneViewSortType`](../enumerations/ListPaneViewSortType.md) \| `undefined`

New sort type, it undefined Default will be used.

#### Returns

`void`

#### Remarks

Updates how slots will be sorted in the view

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the pane and all of its items.

#### Inherited from

[`IPane`](IPane.md).[`show`](IPane.md#show)

***

### updateSlots()

> **updateSlots**(`newSlots`): `void`

#### Parameters

##### newSlots

[`ListPaneSlotCreationProps`](../type-aliases/ListPaneSlotCreationProps.md)[]

Creation properties for the new slots.

#### Returns

`void`

#### Remarks

Updates all slots with the new list.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneViewControlPaneOptions

# Interface: IListPaneViewControlPaneOptions

## Extends

- [`IListViewControlPaneOptions`](IListViewControlPaneOptions.md)

## Properties

### actions?

> `optional` **actions?**: [`ListViewControlAction`](../type-aliases/ListViewControlAction.md)[]

#### Remarks

Default actions

#### Inherited from

[`IListViewControlPaneOptions`](IListViewControlPaneOptions.md).[`actions`](IListViewControlPaneOptions.md#actions)

***

### filterFlags?

> `optional` **filterFlags?**: [`ListViewControlFilterFlags`](../enumerations/ListViewControlFilterFlags.md)

#### Remarks

Flags to determine visible filters. If undefined it will be
All.

***

### onActionClicked?

> `optional` **onActionClicked?**: (`id`) => `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Remarks

This function will be called whenever user clicks an action

#### Inherited from

[`IListViewControlPaneOptions`](IListViewControlPaneOptions.md).[`onActionClicked`](IListViewControlPaneOptions.md#onactionclicked)

***

### onFilterChanged?

> `optional` **onFilterChanged?**: (`visibleSlotIds`) => `void`

#### Parameters

##### visibleSlotIds

`string`[]

#### Returns

`void`

#### Remarks

This function will be called whenever the filter is changed
by the user

***

### sortOptions?

> `optional` **sortOptions?**: [`ListPaneViewSortType`](../enumerations/ListPaneViewSortType.md)[]

#### Remarks

Custom sort options. If undefined, list pane sort options
will be used.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state. It undefined, it will be false.

#### Inherited from

[`IListViewControlPaneOptions`](IListViewControlPaneOptions.md).[`visible`](IListViewControlPaneOptions.md#visible)

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneViewControlPaneOptions

# Interface: IListPaneViewControlPaneOptions

## Properties

### actions?

> `optional` **actions?**: [`ListViewControlAction`](../type-aliases/ListViewControlAction.md)[]

#### Remarks

Default actions

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

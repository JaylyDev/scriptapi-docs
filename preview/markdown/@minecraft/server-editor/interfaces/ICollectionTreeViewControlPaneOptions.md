[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeViewControlPaneOptions

# Interface: ICollectionTreeViewControlPaneOptions

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

> `optional` **onFilterChanged?**: (`visibleFolders`) => `void`

#### Parameters

##### visibleFolders

`string`[]

#### Returns

`void`

#### Remarks

This function will be called whenever the filter is changed
by the user

***

### sortOptions?

> `optional` **sortOptions?**: [`CollectionTreeSortType`](../enumerations/CollectionTreeSortType.md)[]

#### Remarks

Custom sort options. If undefined, collection tree sort
options will be used.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state. It undefined, it will be false.

#### Inherited from

[`IListViewControlPaneOptions`](IListViewControlPaneOptions.md).[`visible`](IListViewControlPaneOptions.md#visible)

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListViewControlPaneOptions

# Interface: IListViewControlPaneOptions

## Extended by

- [`ICollectionTreeViewControlPaneOptions`](ICollectionTreeViewControlPaneOptions.md)
- [`IListPaneViewControlPaneOptions`](IListPaneViewControlPaneOptions.md)

## Properties

### actions?

> `optional` **actions?**: [`ListViewControlAction`](../type-aliases/ListViewControlAction.md)[]

#### Remarks

Default actions

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

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state. It undefined, it will be false.

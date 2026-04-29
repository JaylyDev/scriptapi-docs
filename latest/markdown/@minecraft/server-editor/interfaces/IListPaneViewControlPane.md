[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneViewControlPane

# Interface: IListPaneViewControlPane

View control for a list pane to manage how slots are
displayed

## Source

```ts
export interface IListPaneViewControlPane {
    readonly id: string;
    readonly isFilterActive: boolean;
    readonly visible: boolean;
    getActionState(id: string): ListViewControlActionState | undefined;
    setActionEnabledState(id: string, enabled: boolean): void;
    setActionStates(newActions: ListViewControlAction[]): void;
    setVisible(visible: boolean): void;
    updateActionState(id: string, newState: ListViewControlActionState): void;
}
```

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier

***

### isFilterActive

> `readonly` **isFilterActive**: `boolean`

#### Remarks

Active state of the filter

***

### visible

> `readonly` **visible**: `boolean`

#### Remarks

Visible state of the pane

## Methods

### getActionState()

> **getActionState**(`id`): [`ListViewControlActionState`](../type-aliases/ListViewControlActionState.md) \| `undefined`

#### Parameters

##### id

`string`

Identifier for the action

#### Returns

[`ListViewControlActionState`](../type-aliases/ListViewControlActionState.md) \| `undefined`

#### Remarks

Returns the state of an existing action

***

### setActionEnabledState()

> **setActionEnabledState**(`id`, `enabled`): `void`

#### Parameters

##### id

`string`

Identifier for the action

##### enabled

`boolean`

New action enabled state

#### Returns

`void`

#### Remarks

Updates enabled state of the existing action

***

### setActionStates()

> **setActionStates**(`newActions`): `void`

#### Parameters

##### newActions

[`ListViewControlAction`](../type-aliases/ListViewControlAction.md)[]

New actions

#### Returns

`void`

#### Remarks

Updates existing actions

***

### setVisible()

> **setVisible**(`visible`): `void`

#### Parameters

##### visible

`boolean`

New visibility state

#### Returns

`void`

#### Remarks

Updates visible state of the pane

***

### updateActionState()

> **updateActionState**(`id`, `newState`): `void`

#### Parameters

##### id

`string`

Identifier for the action

##### newState

[`ListViewControlActionState`](../type-aliases/ListViewControlActionState.md)

New action state

#### Returns

`void`

#### Remarks

Updates action item state for the view control

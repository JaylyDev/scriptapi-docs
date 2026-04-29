[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneEntry

# Interface: IListPaneEntry

List Pane entry

## Extended by

- [`IListPaneBoolEntry`](IListPaneBoolEntry.md)
- [`IListPaneButtonEntry`](IListPaneButtonEntry.md)
- [`IListPaneImageEntry`](IListPaneImageEntry.md)
- [`IListPaneTextEntry`](IListPaneTextEntry.md)

## Properties

### index

> `readonly` **index**: `number`

#### Remarks

Sequence index of the entry.

***

### slot

> `readonly` **slot**: [`IListPaneSlot`](IListPaneSlot.md)

#### Remarks

Slot that owns the entry.

***

### type

> `readonly` **type**: [`ListPaneEntryType`](../enumerations/ListPaneEntryType.md)

#### Remarks

Type of the entry.

***

### visible

> `readonly` **visible**: `boolean`

#### Remarks

Visibility state of the entry.

## Methods

### setVisible()

> **setVisible**(`visible`): `void`

#### Parameters

##### visible

`boolean`

New value.

#### Returns

`void`

#### Remarks

Updates visibility of the entry.

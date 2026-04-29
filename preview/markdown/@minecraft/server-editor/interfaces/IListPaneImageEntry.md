[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneImageEntry

# Interface: IListPaneImageEntry

List Pane image entry

## Source

```ts
export interface IListPaneImageEntry extends IListPaneEntry {
    readonly value: Readonly<ImageResourceData>;
    setValue(value: ImageResourceData): void;
}
```

## Extends

- [`IListPaneEntry`](IListPaneEntry.md)

## Properties

### index

> `readonly` **index**: `number`

#### Remarks

Sequence index of the entry.

#### Inherited from

[`IListPaneEntry`](IListPaneEntry.md).[`index`](IListPaneEntry.md#index)

***

### slot

> `readonly` **slot**: [`IListPaneSlot`](IListPaneSlot.md)

#### Remarks

Slot that owns the entry.

#### Inherited from

[`IListPaneEntry`](IListPaneEntry.md).[`slot`](IListPaneEntry.md#slot)

***

### type

> `readonly` **type**: [`ListPaneEntryType`](../enumerations/ListPaneEntryType.md)

#### Remarks

Type of the entry.

#### Inherited from

[`IListPaneEntry`](IListPaneEntry.md).[`type`](IListPaneEntry.md#type)

***

### value

> `readonly` **value**: `Readonly`\<[`ImageResourceData`](../type-aliases/ImageResourceData.md)\>

#### Remarks

Value of the entry.

***

### visible

> `readonly` **visible**: `boolean`

#### Remarks

Visibility state of the entry.

#### Inherited from

[`IListPaneEntry`](IListPaneEntry.md).[`visible`](IListPaneEntry.md#visible)

## Methods

### setValue()

> **setValue**(`value`): `void`

#### Parameters

##### value

[`ImageResourceData`](../type-aliases/ImageResourceData.md)

New value.

#### Returns

`void`

#### Remarks

Updates value of the entry.

***

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

#### Inherited from

[`IListPaneEntry`](IListPaneEntry.md).[`setVisible`](IListPaneEntry.md#setvisible)

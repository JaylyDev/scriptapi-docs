[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneBoolEntry

# Interface: IListPaneBoolEntry

List Pane button entry

## Source

```ts
export interface IListPaneBoolEntry extends IListPaneEntry {
    readonly enabled: boolean;
    readonly value: boolean;
    setEnabled(enabled: true): void;
    setTooltip(tooltip: BasicTooltipContent): void;
    setValue(value: boolean): void;
}
```

## Extends

- [`IListPaneEntry`](IListPaneEntry.md)

## Properties

### enabled

> `readonly` **enabled**: `boolean`

#### Remarks

Enabled state of the entry.

***

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

> `readonly` **value**: `boolean`

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

### setEnabled()

> **setEnabled**(`enabled`): `void`

#### Parameters

##### enabled

`true`

New enabled state.

#### Returns

`void`

#### Remarks

Updates enabled state of the entry.

***

### setTooltip()

> **setTooltip**(`tooltip`): `void`

#### Parameters

##### tooltip

[`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md)

New tooltip.

#### Returns

`void`

#### Remarks

Updates tooltip of the entry.

***

### setValue()

> **setValue**(`value`): `void`

#### Parameters

##### value

`boolean`

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

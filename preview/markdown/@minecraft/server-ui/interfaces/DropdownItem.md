[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / DropdownItem

# Interface: DropdownItem

**`Beta`**

Dropdown data for use in [CustomForm](../classes/CustomForm.md).

## Source

```ts
export interface DropdownItem {
    description?: UIRawMessage | string;
    label: UIRawMessage | string;
    value: number;
}
```

## Properties

### description?

> `optional` **description?**: `string` \| [`UIRawMessage`](UIRawMessage.md)

#### Remarks

The description of the dropdown item shown when it is
selected.

***

### label

> **label**: `string` \| [`UIRawMessage`](UIRawMessage.md)

#### Remarks

The label of the dropdown item in the dropdown.

***

### value

> **value**: `number`

#### Remarks

The value the dropdown will be set to when this item is
selected.

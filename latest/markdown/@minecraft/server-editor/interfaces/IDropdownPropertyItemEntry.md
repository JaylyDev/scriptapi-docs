[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IDropdownPropertyItemEntry

# Interface: IDropdownPropertyItemEntry

Properties of dropdown property item menu entry

## Source

```ts
export interface IDropdownPropertyItemEntry {
    readonly imageData?: ImageResourceData;
    readonly label: string;
    readonly value: number;
}
```

## Properties

### imageData?

> `readonly` `optional` **imageData?**: [`ImageResourceData`](../type-aliases/ImageResourceData.md)

#### Remarks

Optional image of the dropdown entry.

***

### label

> `readonly` **label**: `string`

#### Remarks

Localized display text of the entry.

***

### value

> `readonly` **value**: `number`

#### Remarks

The selectable value of the entry.

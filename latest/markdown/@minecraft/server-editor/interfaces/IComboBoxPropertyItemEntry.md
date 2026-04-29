[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IComboBoxPropertyItemEntry

# Interface: IComboBoxPropertyItemEntry

Properties of toggle group property item list entry

## Source

```ts
export interface IComboBoxPropertyItemEntry {
    readonly label?: LocalizedString;
    readonly value: string;
}
```

## Properties

### label?

> `readonly` `optional` **label?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized display text of the entry.

***

### value

> `readonly` **value**: `string`

#### Remarks

The selectable value of the entry.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IMenuCreationParams

# Interface: IMenuCreationParams

Properties required to create a Menu

## Source

```ts
export interface IMenuCreationParams {
    checked?: boolean;
    enabled?: boolean;
    icon?: string;
    label: string;
    tooltip?: string;
    uniqueId?: string;
}
```

## Properties

### checked?

> `optional` **checked?**: `boolean`

#### Remarks

Whether the menu should show a checkmark

***

### enabled?

> `optional` **enabled?**: `boolean`

#### Remarks

Whether the menu should be enabled or disabled

***

### icon?

> `optional` **icon?**: `string`

#### Remarks

Whether the menu should have an icon.

***

### label

> **label**: `string`

#### Remarks

Localized display text of the menu

***

### tooltip?

> `optional` **tooltip?**: `string`

#### Remarks

Whether the menu should have a tooltip.

***

### uniqueId?

> `optional` **uniqueId?**: `string`

#### Remarks

Custom unique identifier that will replace random id

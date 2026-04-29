[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IRootPropertyPaneHeaderAction

# Interface: IRootPropertyPaneHeaderAction

Represents the data to display an action button on a root
property pane header.

## Source

```ts
export interface IRootPropertyPaneHeaderAction {
    action?: () => void;
    icon: string;
    tooltip?: LocalizedString;
}
```

## Properties

### action?

> `optional` **action?**: () => `void`

#### Returns

`void`

***

### icon

> **icon**: `string`

***

### tooltip?

> `optional` **tooltip?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

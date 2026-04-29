[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPane

# Interface: IPane

Pane represents a container for UI components.

## Source

```ts
export interface IPane {
    readonly id: string;
    visible: boolean;
    hide(): void;
    show(): void;
}
```

## Extended by

- [`IButtonPanePropertyItem`](IButtonPanePropertyItem.md)
- [`IListPanePropertyItem`](IListPanePropertyItem.md)
- [`IModalControlPane`](IModalControlPane.md)
- [`IModalOverlayPane`](IModalOverlayPane.md)
- [`IPropertyPane`](IPropertyPane.md)

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the pane.

***

### visible

> **visible**: `boolean`

#### Remarks

Check visibility of the pane

## Methods

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the pane.

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the pane and all of its items.

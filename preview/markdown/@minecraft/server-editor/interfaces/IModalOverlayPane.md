[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalOverlayPane

# Interface: IModalOverlayPane

A modal overlay pane is displayed over a root pane.

## Source

```ts
export interface IModalOverlayPane extends IPane {
    contentPane: ISubPanePropertyItem;
    controlPane: IModalControlPane;
}
```

## Extends

- [`IPane`](IPane.md)

## Properties

### contentPane

> **contentPane**: [`ISubPanePropertyItem`](ISubPanePropertyItem.md)

#### Remarks

A sub pane that represents content of the modal overlay.

***

### controlPane

> **controlPane**: [`IModalControlPane`](IModalControlPane.md)

#### Remarks

A pane that represent modal control elements.

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the pane.

#### Inherited from

[`IPane`](IPane.md).[`id`](IPane.md#id)

***

### visible

> **visible**: `boolean`

#### Remarks

Check visibility of the pane

#### Inherited from

[`IPane`](IPane.md).[`visible`](IPane.md#visible)

## Methods

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the pane.

#### Inherited from

[`IPane`](IPane.md).[`hide`](IPane.md#hide)

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the pane and all of its items.

#### Inherited from

[`IPane`](IPane.md).[`show`](IPane.md#show)

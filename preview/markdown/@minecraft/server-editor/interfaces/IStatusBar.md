[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IStatusBar

# Interface: IStatusBar

Manager and container for IStatusBarItem objects

## Source

```ts
export interface IStatusBar {
    createItem(props: IStatusBarItemCreationParams): IStatusBarItem;
    removeItem(id: string): void;
}
```

## Methods

### createItem()

> **createItem**(`props`): [`IStatusBarItem`](IStatusBarItem.md)

#### Parameters

##### props

[`IStatusBarItemCreationParams`](IStatusBarItemCreationParams.md)

Properties to create status bar item

#### Returns

[`IStatusBarItem`](IStatusBarItem.md)

#### Remarks

Create a item in status bar

***

### removeItem()

> **removeItem**(`id`): `void`

#### Parameters

##### id

`string`

Status bar item identifier

#### Returns

`void`

#### Remarks

Remove an existing status bar item

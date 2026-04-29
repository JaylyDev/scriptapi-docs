[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IStatusBar

# Interface: IStatusBar

Manager and container for IStatusBarItem objects

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

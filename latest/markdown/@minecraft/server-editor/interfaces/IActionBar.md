[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IActionBar

# Interface: IActionBar

Manager for IActionBarItem objects.

## Source

```ts
export interface IActionBar {
    registerItem(
        id: string,
        action: RegisteredAction<NoArgsAction>,
        props: IActionBarItemCreationParams,
    ): IActionBarItem;
    unregisterItem(id: string): void;
}
```

## Methods

### registerItem()

> **registerItem**(`id`, `action`, `props`): [`IActionBarItem`](IActionBarItem.md)

#### Parameters

##### id

`string`

Unique item identifier.

##### action

[`RegisteredAction`](../type-aliases/RegisteredAction.md)\<[`NoArgsAction`](../type-aliases/NoArgsAction.md)\>

Action to be invoked.

##### props

[`IActionBarItemCreationParams`](IActionBarItemCreationParams.md)

Configuration for the item to create.

#### Returns

[`IActionBarItem`](IActionBarItem.md)

#### Remarks

Add a new action bar item to the collection.

***

### unregisterItem()

> **unregisterItem**(`id`): `void`

#### Parameters

##### id

`string`

Unique item identifier.

#### Returns

`void`

#### Remarks

Remove an action item from the collection.

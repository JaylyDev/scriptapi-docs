[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IMenuContainer

# Interface: IMenuContainer

Manager and container for IMenu objects

## Source

```ts
export interface IMenuContainer {
    createMenu(props: IMenuCreationParams): IMenu;
    getMenu(id: string): Promise<IMenu>;
}
```

## Methods

### createMenu()

> **createMenu**(`props`): [`IMenu`](IMenu.md)

#### Parameters

##### props

[`IMenuCreationParams`](IMenuCreationParams.md)

Configuration for the menu to create

#### Returns

[`IMenu`](IMenu.md)

#### Remarks

Create a top level item in the container.

***

### getMenu()

> **getMenu**(`id`): `Promise`\<[`IMenu`](IMenu.md)\>

#### Parameters

##### id

`string`

Menu identifier

#### Returns

`Promise`\<[`IMenu`](IMenu.md)\>

#### Remarks

Search for a menu item, if it's not found defer it to next
tick.

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ActionManager

# Interface: ActionManager

Binds actions to the client and manages their lifetime.
Action managers are managed on a per player basis since
client side UI is per player.

## Source

```ts
export interface ActionManager {
    createAction<T extends Action>(rawAction: T): RegisteredAction<T>;
}
```

## Methods

### createAction()

> **createAction**\<`T`\>(`rawAction`): [`RegisteredAction`](../type-aliases/RegisteredAction.md)\<`T`\>

#### Type Parameters

##### T

`T` *extends* [`Action`](../type-aliases/Action.md)

#### Parameters

##### rawAction

`T`

The raw action to create. See ActionTypes for supported
parameters

#### Returns

[`RegisteredAction`](../type-aliases/RegisteredAction.md)\<`T`\>

#### Remarks

Creates an action and registers it on the client

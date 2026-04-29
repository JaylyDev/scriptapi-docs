[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInputPermissionCategoryChangeAfterEventSignal

# Class: PlayerInputPermissionCategoryChangeAfterEventSignal

Manages callbacks that are connected to after a players
input permissions change.

## Source

```ts
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerInputPermissionCategoryChangeAfterEventSignal**(): `PlayerInputPermissionCategoryChangeAfterEventSignal`

#### Returns

`PlayerInputPermissionCategoryChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a players input
permissions change.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

Removes a callback from being called after a players input
permissions change.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

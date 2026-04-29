[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerLeaveAfterEventSignal

# Class: PlayerLeaveAfterEventSignal

Manages callbacks that are connected to a player leaving the
world.

## Source

```ts
export class PlayerLeaveAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerLeaveAfterEventSignal**(): `PlayerLeaveAfterEventSignal`

#### Returns

`PlayerLeaveAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a player leaves the
world.

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

Removes a callback from being called when a player leaves
the world.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

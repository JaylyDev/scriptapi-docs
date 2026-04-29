[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerGameModeChangeAfterEventSignal

# Class: PlayerGameModeChangeAfterEventSignal

Manages callbacks that are connected to after a players game
mode is changed.

## Source

```ts
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerGameModeChangeAfterEventSignal**(): `PlayerGameModeChangeAfterEventSignal`

#### Returns

`PlayerGameModeChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a players game
mode is changed.

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

Removes a callback from being called after a players game
mode is changed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

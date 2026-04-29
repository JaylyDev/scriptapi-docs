[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerGameModeChangeBeforeEventSignal

# Class: PlayerGameModeChangeBeforeEventSignal

Manages callbacks that are connected to before a players
game mode is changed.

## Source

```ts
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerGameModeChangeBeforeEventSignal**(): `PlayerGameModeChangeBeforeEventSignal`

#### Returns

`PlayerGameModeChangeBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called before a players game
mode is changed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

Removes a callback from being called before a players game
mode is changed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInputModeChangeAfterEventSignal

# Class: PlayerInputModeChangeAfterEventSignal

Manages callbacks that are connected to player input mode.

## Source

```ts
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerInputModeChangeAfterEventSignal**(): `PlayerInputModeChangeAfterEventSignal`

#### Returns

`PlayerInputModeChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after the player input
mode changes.

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

Removes a callback from being called after the player input
mode changes.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

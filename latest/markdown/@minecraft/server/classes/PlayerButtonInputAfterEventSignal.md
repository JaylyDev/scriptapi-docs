[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerButtonInputAfterEventSignal

# Class: PlayerButtonInputAfterEventSignal

Manages callbacks that are connected to player inputs.

## Source

```ts
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerButtonInputAfterEventSignal**(): `PlayerButtonInputAfterEventSignal`

#### Returns

`PlayerButtonInputAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`InputEventOptions`](../interfaces/InputEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after the player
performs an input.

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

Removes a callback from being called after the player
performs an input.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

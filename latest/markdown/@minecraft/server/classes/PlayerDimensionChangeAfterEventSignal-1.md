[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerDimensionChangeAfterEventSignal

# Class: PlayerDimensionChangeAfterEventSignal

Manages callbacks that are connected to successful player
dimension changes.

## Source

```ts
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerDimensionChangeAfterEventSignal**(): `PlayerDimensionChangeAfterEventSignal`

#### Returns

`PlayerDimensionChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Subscribes the specified callback to a player dimension
change after event.

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

Removes the specified callback from a player dimension
change after event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

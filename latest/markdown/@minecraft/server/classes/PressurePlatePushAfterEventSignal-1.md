[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PressurePlatePushAfterEventSignal

# Class: PressurePlatePushAfterEventSignal

Manages callbacks that are connected to when a pressure
plate is pushed.

## Source

```ts
export class PressurePlatePushAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PressurePlatePushAfterEventSignal**(): `PressurePlatePushAfterEventSignal`

#### Returns

`PressurePlatePushAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a pressure plate is
pushed.

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

Removes a callback from being called when a pressure plate
is pushed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

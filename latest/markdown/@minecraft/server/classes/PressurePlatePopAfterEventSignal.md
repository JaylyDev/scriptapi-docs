[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PressurePlatePopAfterEventSignal

# Class: PressurePlatePopAfterEventSignal

Manages callbacks that are connected to when a pressure
plate is popped.

## Source

```ts
export class PressurePlatePopAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PressurePlatePopAfterEventSignal**(): `PressurePlatePopAfterEventSignal`

#### Returns

`PressurePlatePopAfterEventSignal`

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
popped.

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
is popped.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

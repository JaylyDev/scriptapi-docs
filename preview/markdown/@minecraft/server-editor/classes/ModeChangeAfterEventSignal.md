[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ModeChangeAfterEventSignal

# Class: ModeChangeAfterEventSignal

Manages callbacks that are connected to when a player editor
mode changes.

## Source

```ts
export class ModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ModeChangeAfterEvent) => void): (arg0: ModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: ModeChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ModeChangeAfterEventSignal**(): `ModeChangeAfterEventSignal`

#### Returns

`ModeChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Subscribes the specified callback to an editor mode change
after event.

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

Removes the specified callback from an editor mode change
after event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

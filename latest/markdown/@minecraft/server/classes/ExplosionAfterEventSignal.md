[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ExplosionAfterEventSignal

# Class: ExplosionAfterEventSignal

Manages callbacks that are connected to when an explosion
occurs.

## Source

```ts
export class ExplosionAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ExplosionAfterEventSignal**(): `ExplosionAfterEventSignal`

#### Returns

`ExplosionAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an explosion
occurs.

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

Removes a callback from being called when an explosion
occurs.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

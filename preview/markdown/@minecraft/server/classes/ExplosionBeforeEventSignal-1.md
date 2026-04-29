[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ExplosionBeforeEventSignal

# Class: ExplosionBeforeEventSignal

Manages callbacks that are connected to before an explosion
occurs.

## Source

```ts
export class ExplosionBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ExplosionBeforeEventSignal**(): `ExplosionBeforeEventSignal`

#### Returns

`ExplosionBeforeEventSignal`

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

Adds a callback that will be called when before an explosion
occurs. The callback can optionally change or cancel
explosion behavior.

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

Removes a callback from being called from before when an
explosion would occur.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ExplosionBeforeEventSignal

# Class: ExplosionBeforeEventSignal

Manages callbacks that are connected to before an explosion
occurs.

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

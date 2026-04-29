[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / StartupBeforeEventSignal

# Class: StartupBeforeEventSignal

## Constructors

### Constructor

> `private` **new StartupBeforeEventSignal**(): `StartupBeforeEventSignal`

#### Returns

`StartupBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with early-execution privilege.

#### Returns

Closure that is called with early-execution privilege.

(`arg0`) => `void`

#### Remarks

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with early-execution privilege.

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / WeatherChangeBeforeEventSignal

# Class: WeatherChangeBeforeEventSignal

Manages callbacks that are connected to before weather
changing.

## Constructors

### Constructor

> `private` **new WeatherChangeBeforeEventSignal**(): `WeatherChangeBeforeEventSignal`

#### Returns

`WeatherChangeBeforeEventSignal`

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

Adds a callback that will be called before weather changes.

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

Removes a callback from being called before weather changes.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

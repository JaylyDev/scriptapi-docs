[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerDimensionChangeAfterEventSignal

# Class: PlayerDimensionChangeAfterEventSignal

Manages callbacks that are connected to successful player
dimension changes.

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

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInputModeChangeAfterEventSignal

# Class: PlayerInputModeChangeAfterEventSignal

Manages callbacks that are connected to player input mode.

## Constructors

### Constructor

> `private` **new PlayerInputModeChangeAfterEventSignal**(): `PlayerInputModeChangeAfterEventSignal`

#### Returns

`PlayerInputModeChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after the player input
mode changes.

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

Removes a callback from being called after the player input
mode changes.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

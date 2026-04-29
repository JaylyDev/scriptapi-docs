[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInteractWithBlockAfterEventSignal

# Class: PlayerInteractWithBlockAfterEventSignal

Manages callbacks that are connected to after a player
interacts with a block.

## Constructors

### Constructor

> `private` **new PlayerInteractWithBlockAfterEventSignal**(): `PlayerInteractWithBlockAfterEventSignal`

#### Returns

`PlayerInteractWithBlockAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a player interacts
with a block.

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

Removes a callback from being called after a player
interacts with a block.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

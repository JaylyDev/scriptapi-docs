[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityRemoveBeforeEventSignal

# Class: EntityRemoveBeforeEventSignal

Allows registration for an event that fires when an entity
is being removed from  the game (for example, unloaded, or a
few seconds after they are dead.)

## Constructors

### Constructor

> `private` **new EntityRemoveBeforeEventSignal**(): `EntityRemoveBeforeEventSignal`

#### Returns

`EntityRemoveBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function to call.
This closure is called with restricted-execution privilege.

#### Returns

Returns a closure that can be used in subsequent unsubscribe
operations.
Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Will call your function every time an entity is being
removed from the game.

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

Unsubscribes your function from subsequent calls when an
entity is being removed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

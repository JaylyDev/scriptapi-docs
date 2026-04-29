[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ShutdownBeforeEventSignal

# Class: ShutdownBeforeEventSignal

Provides an adaptable interface for callers to subscribe to
an event that fires before the game world shuts down. This
event occurs after players have left, but before the world
has closed.

## Constructors

### Constructor

> `private` **new ShutdownBeforeEventSignal**(): `ShutdownBeforeEventSignal`

#### Returns

`ShutdownBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function callback that is called when this event fires.
This closure is called with restricted-execution privilege.

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a new subscriber callback to this event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

Function closure that was previously passed to the subscribe
method.
This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

Removes a subscriber callback previously subscribed to via
the subscribe method.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

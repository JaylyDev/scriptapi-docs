[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerUseNameTagAfterEventSignal

# Class: PlayerUseNameTagAfterEventSignal

**`Beta`**

Manages callbacks that are connected to when a player
successfully names an Entity with a named Name Tag item.

## Constructors

### Constructor

> `private` **new PlayerUseNameTagAfterEventSignal**(): `PlayerUseNameTagAfterEventSignal`

#### Returns

`PlayerUseNameTagAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Subscribes the specified callback to a player use name tag
after event.

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

Removes the specified callback from a player use name tag
after event.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

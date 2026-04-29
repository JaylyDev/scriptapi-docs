[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ProjectileHitEntityAfterEventSignal

# Class: ProjectileHitEntityAfterEventSignal

Manages callbacks that are connected to when a projectile
hits an entity.

## Constructors

### Constructor

> `private` **new ProjectileHitEntityAfterEventSignal**(): `ProjectileHitEntityAfterEventSignal`

#### Returns

`ProjectileHitEntityAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a projectile hits
an entity.

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

Removes a callback from being called when a projectile hits
an entity.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

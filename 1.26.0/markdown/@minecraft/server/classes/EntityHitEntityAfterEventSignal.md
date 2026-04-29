[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityHitEntityAfterEventSignal

# Class: EntityHitEntityAfterEventSignal

Manages callbacks that are connected to when an entity makes
a melee attack on another entity.

## Constructors

### Constructor

> `private` **new EntityHitEntityAfterEventSignal**(): `EntityHitEntityAfterEventSignal`

#### Returns

`EntityHitEntityAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityEventOptions`](../interfaces/EntityEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity hits
another entity.

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

Removes a callback from being called when an entity makes a
melee attack on another entity.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

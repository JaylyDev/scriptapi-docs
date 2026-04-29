[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealthChangedAfterEventSignal

# Class: EntityHealthChangedAfterEventSignal

Manages callbacks that are connected to when the health of
an entity changes.

## Constructors

### Constructor

> `private` **new EntityHealthChangedAfterEventSignal**(): `EntityHealthChangedAfterEventSignal`

#### Returns

`EntityHealthChangedAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityEventOptions`](../interfaces/EntityEventOptions-1.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when the health of an
entity changes.

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

Removes a callback from being called when the health of an
entity changes.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

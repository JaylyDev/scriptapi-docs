[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHurtBeforeEventSignal

# Class: EntityHurtBeforeEventSignal

**`Beta`**

Manages callbacks that are connected to when an entity will
be hurt.

## Constructors

### Constructor

> `private` **new EntityHurtBeforeEventSignal**(): `EntityHurtBeforeEventSignal`

#### Returns

`EntityHurtBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

##### options?

[`EntityHurtBeforeEventOptions`](../interfaces/EntityHurtBeforeEventOptions.md)

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity will be
hurt.

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

Removes a callback from being called when an entity will be
hurt.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EffectAddAfterEventSignal

# Class: EffectAddAfterEventSignal

Manages callbacks that are connected to when an effect is
added to an entity.

## Constructors

### Constructor

> `private` **new EffectAddAfterEventSignal**(): `EffectAddAfterEventSignal`

#### Returns

`EffectAddAfterEventSignal`

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

Adds a callback that will be called when an effect is added
to an entity.

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

Removes a callback from being called when an effect is added
to an entity.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

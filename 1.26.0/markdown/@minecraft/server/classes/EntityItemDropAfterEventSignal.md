[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemDropAfterEventSignal

# Class: EntityItemDropAfterEventSignal

**`Beta`**

Manages callbacks that are connected to when an entity has
dropped items.

## Constructors

### Constructor

> `private` **new EntityItemDropAfterEventSignal**(): `EntityItemDropAfterEventSignal`

#### Returns

`EntityItemDropAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityItemDropEventOptions`](../interfaces/EntityItemDropEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when an entity has
dropped items.

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

Removes a callback from being called when an entity has
dropped items.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / DataDrivenEntityTriggerAfterEventSignal

# Class: DataDrivenEntityTriggerAfterEventSignal

Contains event registration related to firing of a data
driven entity event - for example, the
minecraft:ageable_grow_up event on a chicken.

## Constructors

### Constructor

> `private` **new DataDrivenEntityTriggerAfterEventSignal**(): `DataDrivenEntityTriggerAfterEventSignal`

#### Returns

`DataDrivenEntityTriggerAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`EntityDataDrivenTriggerEventOptions`](../interfaces/EntityDataDrivenTriggerEventOptions-1.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called after a data driven
entity event is triggered.

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

Removes a callback that will be called after a data driven
entity event is triggered.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

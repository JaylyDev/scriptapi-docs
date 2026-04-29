[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataStorePayloadAfterEventSignal

# Class: DataStorePayloadAfterEventSignal

## Constructors

### Constructor

> `private` **new DataStorePayloadAfterEventSignal**(): `DataStorePayloadAfterEventSignal`

#### Returns

`DataStorePayloadAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

This function can be called in early-execution mode.

#### Write Privilege

This function can't be called in read-only mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

This function can be called in early-execution mode.

#### Write Privilege

This function can't be called in read-only mode.

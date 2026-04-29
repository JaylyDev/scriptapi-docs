[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / DataStoreActionContainer

# Class: DataStoreActionContainer

## Constructors

### Constructor

> `private` **new DataStoreActionContainer**(): `DataStoreActionContainer`

#### Returns

`DataStoreActionContainer`

## Methods

### bindActionToControl()

> **bindActionToControl**(`controlId`, `actionPayload`): `void`

#### Parameters

##### controlId

`string`

##### actionPayload

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### removeActionFromControl()

> **removeActionFromControl**(`controlId`, `actionPayload?`): `void`

#### Parameters

##### controlId

`string`

##### actionPayload?

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalDialogActivationRequest

# Interface: IModalDialogActivationRequest

Represents modal dialog state for the specific activation
request

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the request

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Determines if the request is still active

## Methods

### cancel()

> **cancel**(): `void`

#### Returns

`void`

#### Remarks

Cancels the request if it's still active

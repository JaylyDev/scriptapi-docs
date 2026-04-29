[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / RequestBodyTooLargeError

# Class: RequestBodyTooLargeError

An error thrown when an network request body exceeds the
configured size limit.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new RequestBodyTooLargeError**(): `RequestBodyTooLargeError`

#### Returns

`RequestBodyTooLargeError`

#### Overrides

`Error.constructor`

## Properties

### maxBytes

> `readonly` **maxBytes**: `number`

#### Remarks

Configured maximum body size in bytes.

This property can be read in early-execution mode.

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### providedBytes

> `readonly` **providedBytes**: `number`

#### Remarks

Request body size in bytes.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

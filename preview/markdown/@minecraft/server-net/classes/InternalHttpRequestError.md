[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / InternalHttpRequestError

# Class: InternalHttpRequestError

An error thrown when a platform-level HTTP error occurs.
Information provided in this class may be useful for
diagnostics purposes but will differ from platform to
platform.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new InternalHttpRequestError**(): `InternalHttpRequestError`

#### Returns

`InternalHttpRequestError`

#### Overrides

`Error.constructor`

## Properties

### errorCode

> `readonly` **errorCode**: `number`

#### Remarks

This property can be read in early-execution mode.

***

### errorMessage

> `readonly` **errorMessage**: `string`

#### Remarks

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

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / InternalHttpRequestError

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

### code

> `readonly` **code**: `number`

#### Remarks

The platform-provided numeric error code for the error.

This property can be read in early-execution mode.

***

### message

> `readonly` **message**: `string`

#### Remarks

The platform-provided message for the error.

This property can be read in early-execution mode.

#### Overrides

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

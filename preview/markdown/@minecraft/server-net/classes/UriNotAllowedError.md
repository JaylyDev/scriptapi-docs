[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / UriNotAllowedError

# Class: UriNotAllowedError

An error thrown when a network request targets a URI that is
not in the configured allow list.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new UriNotAllowedError**(): `UriNotAllowedError`

#### Returns

`UriNotAllowedError`

#### Overrides

`Error.constructor`

## Properties

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

***

### uri

> `readonly` **uri**: `string`

#### Remarks

URI that was rejected because it is not allowed.

This property can be read in early-execution mode.

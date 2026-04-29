[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / HttpsOnlyError

# Class: HttpsOnlyError

An error thrown when HTTPS is required but a non-HTTPS URI
was provided.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new HttpsOnlyError**(): `HttpsOnlyError`

#### Returns

`HttpsOnlyError`

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

URI that was rejected for not using HTTPS.

This property can be read in early-execution mode.

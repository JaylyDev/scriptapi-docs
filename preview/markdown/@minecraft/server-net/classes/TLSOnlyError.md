[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / TLSOnlyError

# Class: TLSOnlyError

An error thrown when secure URI scheme is required but a
non-secure URI was provided.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new TLSOnlyError**(): `TLSOnlyError`

#### Returns

`TLSOnlyError`

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

URI that was rejected for not using secure scheme.

This property can be read in early-execution mode.

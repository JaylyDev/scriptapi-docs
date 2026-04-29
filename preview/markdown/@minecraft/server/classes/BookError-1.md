[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BookError

# Class: BookError

Errors that can be thrown when using [ItemBookComponent](ItemBookComponent-1.md).

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new BookError**(): `BookError`

#### Returns

`BookError`

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

### reason

> `readonly` **reason**: [`BookErrorReason`](../enumerations/BookErrorReason-1.md)

#### Remarks

The reason for the error.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

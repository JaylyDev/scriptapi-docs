[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CustomCommandError

# Class: CustomCommandError

Error object thrown when CustomCommandRegistry errors occur.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new CustomCommandError**(): `CustomCommandError`

#### Returns

`CustomCommandError`

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

> `readonly` **reason**: [`CustomCommandErrorReason`](../enumerations/CustomCommandErrorReason-1.md)

#### Remarks

Reason for the error.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

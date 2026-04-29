[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/common](../README.md) / InvalidArgumentError

# Class: InvalidArgumentError

Specifies that a passed-in argument to a method is not
correct or allowed.

## Extends

- `Error`

## Constructors

### Constructor

> **new InvalidArgumentError**(`funcName`, `argTypeName`, `errorType`, `argIndex?`): `InvalidArgumentError`

#### Parameters

##### funcName

`string`

##### argTypeName

`string`

##### errorType

[`InvalidArgumentErrorType`](../enumerations/InvalidArgumentErrorType.md)

##### argIndex?

`number`

#### Returns

`InvalidArgumentError`

#### Remarks

#### Overrides

`Error.constructor`

## Properties

### index

> `readonly` **index**: `number`

#### Remarks

Index of the argument that is in error.

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

***

### type

> `readonly` **type**: [`InvalidArgumentErrorType`](../enumerations/InvalidArgumentErrorType.md)

#### Remarks

Type of the argument error.

This property can be read in early-execution mode.

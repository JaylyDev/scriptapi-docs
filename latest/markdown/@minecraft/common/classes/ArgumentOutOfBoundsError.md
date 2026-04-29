[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/common](../README.md) / ArgumentOutOfBoundsError

# Class: ArgumentOutOfBoundsError

This type of error is thrown when a parameter to a method or
property is out of expected bounds.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new ArgumentOutOfBoundsError**(): `ArgumentOutOfBoundsError`

#### Returns

`ArgumentOutOfBoundsError`

#### Overrides

`Error.constructor`

## Properties

### maxValue

> **maxValue**: `number`

#### Remarks

Max expected value for the condition.

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### minValue

> **minValue**: `number`

#### Remarks

Min expected value for the condition.

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

### value

> **value**: `number`

#### Remarks

Passed-in value for the argument.

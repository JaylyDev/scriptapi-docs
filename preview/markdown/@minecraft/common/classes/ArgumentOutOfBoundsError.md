[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/common](../README.md) / ArgumentOutOfBoundsError

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

### index

> `readonly` **index**: `number`

#### Remarks

This property can be read in early-execution mode.

***

### maxValue?

> `readonly` `optional` **maxValue?**: `number`

#### Remarks

Max expected value for the condition.

This property can be read in early-execution mode.

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### minValue?

> `readonly` `optional` **minValue?**: `number`

#### Remarks

Min expected value for the condition.

This property can be read in early-execution mode.

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

### value?

> `readonly` `optional` **value?**: `number`

#### Remarks

Passed-in value for the argument.

This property can be read in early-execution mode.

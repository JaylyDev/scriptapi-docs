[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / NamespaceNameError

# Class: NamespaceNameError

Thrown when a name requires a namespace and an error occurs
when validating that namespace

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new NamespaceNameError**(): `NamespaceNameError`

#### Returns

`NamespaceNameError`

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

> `readonly` **reason**: [`NamespaceNameErrorReason`](../enumerations/NamespaceNameErrorReason.md)

#### Remarks

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / NamespaceNameError

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

> **reason**: [`NamespaceNameErrorReason`](../enumerations/NamespaceNameErrorReason-1.md)

#### Remarks

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

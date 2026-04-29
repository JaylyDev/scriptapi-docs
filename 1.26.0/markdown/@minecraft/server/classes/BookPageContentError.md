[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BookPageContentError

# Class: BookPageContentError

The error called if page content being set on an [ItemBookComponent](ItemBookComponent.md) are invalid ie. exceeding the maximum
page length.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new BookPageContentError**(): `BookPageContentError`

#### Returns

`BookPageContentError`

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

### pageIndex

> **pageIndex**: `number`

#### Remarks

The index of the page requested to be modified.

This property can be read in early-execution mode.

***

### reason

> **reason**: [`BookErrorReason`](../enumerations/BookErrorReason.md)

#### Remarks

The reason for the error.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

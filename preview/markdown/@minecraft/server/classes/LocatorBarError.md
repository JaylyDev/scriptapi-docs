[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / LocatorBarError

# Class: LocatorBarError

**`Beta`**

Error thrown when a locator bar operation fails. Contains a
reason code indicating the specific cause of the error.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new LocatorBarError**(): `LocatorBarError`

#### Returns

`LocatorBarError`

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

> `readonly` **reason**: [`LocatorBarErrorReason`](../enumerations/LocatorBarErrorReason.md)

#### Remarks

The [LocatorBarErrorReason](../enumerations/LocatorBarErrorReason.md) code that indicates why
the locator bar operation failed.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

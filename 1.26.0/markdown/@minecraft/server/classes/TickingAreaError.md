[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / TickingAreaError

# Class: TickingAreaError

**`Beta`**

The error returned from invalid [TickingAreaManager](TickingAreaManager.md)
method calls.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new TickingAreaError**(): `TickingAreaError`

#### Returns

`TickingAreaError`

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

> **reason**: [`TickingAreaErrorReason`](../enumerations/TickingAreaErrorReason.md)

#### Remarks

The specific reason that the error was thrown.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

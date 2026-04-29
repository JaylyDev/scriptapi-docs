[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / TickingAreaError

# Class: TickingAreaError

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

> `readonly` **reason**: [`TickingAreaErrorReason`](../enumerations/TickingAreaErrorReason.md)

#### Remarks

The specific reason that the error was thrown.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

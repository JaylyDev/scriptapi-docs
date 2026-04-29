[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / GameTestError

# Class: GameTestError

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new GameTestError**(): `GameTestError`

#### Returns

`GameTestError`

#### Overrides

`Error.constructor`

## Properties

### context?

> `optional` **context?**: [`GameTestErrorContext`](../interfaces/GameTestErrorContext.md)

#### Remarks

This property can be read in early-execution mode.

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### messageParameters

> **messageParameters**: `string`[]

#### Remarks

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

### type

> **type**: [`GameTestErrorType`](../enumerations/GameTestErrorType.md)

#### Remarks

This property can be read in early-execution mode.

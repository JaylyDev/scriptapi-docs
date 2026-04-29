[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-gametest](../README.md) / GameTestError

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

> `readonly` `optional` **context?**: [`GameTestErrorContext`](../interfaces/GameTestErrorContext.md)

#### Remarks

This property can be read in early-execution mode.

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### messageParameters

> `readonly` **messageParameters**: `string`[]

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

> `readonly` **type**: [`GameTestErrorType`](../enumerations/GameTestErrorType.md)

#### Remarks

This property can be read in early-execution mode.

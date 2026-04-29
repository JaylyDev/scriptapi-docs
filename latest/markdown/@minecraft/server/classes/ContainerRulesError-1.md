[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ContainerRulesError

# Class: ContainerRulesError

Error thrown if [ContainerRules](../interfaces/ContainerRules-1.md) are broken on
container operations.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new ContainerRulesError**(): `ContainerRulesError`

#### Returns

`ContainerRulesError`

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

> `readonly` **reason**: [`ContainerRulesErrorReason`](../enumerations/ContainerRulesErrorReason-1.md)

#### Remarks

The specific reason the error was thrown.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

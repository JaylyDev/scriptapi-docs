[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ContainerRulesError

# Class: ContainerRulesError

Error thrown if [ContainerRules](../interfaces/ContainerRules.md) are broken on
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

> **reason**: [`ContainerRulesErrorReason`](../enumerations/ContainerRulesErrorReason.md)

#### Remarks

The specific reason the error was thrown.

This property can be read in early-execution mode.

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

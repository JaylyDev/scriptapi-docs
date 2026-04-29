[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / Component

# Class: Component

Base class for downstream Component implementations.

## Extended by

- [`BlockComponent`](BlockComponent-1.md)
- [`EntityComponent`](EntityComponent-1.md)
- [`ItemComponent`](ItemComponent-1.md)

## Constructors

### Constructor

> `private` **new Component**(): `Component`

#### Returns

`Component`

## Properties

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

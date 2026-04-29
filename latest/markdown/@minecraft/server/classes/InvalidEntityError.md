[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / InvalidEntityError

# Class: InvalidEntityError

The error called when an entity is invalid. This can occur
when accessing components on a removed entity.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new InvalidEntityError**(): `InvalidEntityError`

#### Returns

`InvalidEntityError`

#### Overrides

`Error.constructor`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

The id of the entity that is now invalid.

This property can be read in early-execution mode.

***

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

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

***

### type

> `readonly` **type**: `string`

#### Remarks

The type of the entity that is now invalid.

This property can be read in early-execution mode.

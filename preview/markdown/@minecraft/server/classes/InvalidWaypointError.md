[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / InvalidWaypointError

# Class: InvalidWaypointError

**`Beta`**

Error thrown when attempting to perform operations on an
invalid waypoint. A waypoint becomes invalid when it is
removed or when the entity it tracks is no longer valid.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new InvalidWaypointError**(): `InvalidWaypointError`

#### Returns

`InvalidWaypointError`

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

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

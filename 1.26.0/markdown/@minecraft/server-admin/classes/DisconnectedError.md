[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-admin](../README.md) / DisconnectedError

# Class: DisconnectedError

An error that is thrown when trying to interact with a join
event and the player is disconnected.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new DisconnectedError**(): `DisconnectedError`

#### Returns

`DisconnectedError`

#### Overrides

`Error.constructor`

## Properties

### id

> **id**: `string`

#### Remarks

The id of the player that was disconnected.

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

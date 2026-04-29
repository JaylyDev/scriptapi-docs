[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / InvalidItemStackError

# Class: InvalidItemStackError

The error called when an item is invalid. This can occur
when accessing components on a removed item.

## Extends

- `Error`

## Constructors

### Constructor

> `private` **new InvalidItemStackError**(): `InvalidItemStackError`

#### Returns

`InvalidItemStackError`

#### Overrides

`Error.constructor`

## Properties

### itemType

> **itemType**: [`ItemType`](ItemType.md)

#### Remarks

The type of the item that is now invalid.

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

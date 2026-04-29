[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockStateType

# Class: BlockStateType

Represents a configurable state value of a block instance.
For example, the facing direction of stairs is accessible as
a block state.

## Constructors

### Constructor

> `private` **new BlockStateType**(): `BlockStateType`

#### Returns

`BlockStateType`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Identifier of the block property.

#### World Ready

This property can't be read in early-execution mode.

***

### validValues

> `readonly` **validValues**: (`string` \| `number` \| `boolean`)[]

#### Remarks

A set of valid values for the block property.

#### World Ready

This property can't be read in early-execution mode.

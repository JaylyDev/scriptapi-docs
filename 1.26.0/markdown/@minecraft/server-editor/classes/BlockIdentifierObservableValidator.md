[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / BlockIdentifierObservableValidator

# Class: BlockIdentifierObservableValidator

Validates observable objects that support string as
BlockType

## Implements

- [`ObservableValidator`](ObservableValidator.md)\<`string`\>

## Constructors

### Constructor

> **new BlockIdentifierObservableValidator**(`defaultName`): `BlockIdentifierObservableValidator`

#### Parameters

##### defaultName

`string`

#### Returns

`BlockIdentifierObservableValidator`

#### Remarks

Constructs a new instance of the
`BlockIdentifierObservableValidator` class

## Properties

### \_defaultValue

> `protected` **\_defaultValue**: `string`

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Accessors

### defaultValue

#### Get Signature

> **get** **defaultValue**(): `string`

##### Returns

`string`

## Methods

### validate()

> **validate**(`newValue`): `string`

#### Parameters

##### newValue

`string`

#### Returns

`string`

#### Implementation of

[`ObservableValidator`](ObservableValidator.md).[`validate`](ObservableValidator.md#validate)

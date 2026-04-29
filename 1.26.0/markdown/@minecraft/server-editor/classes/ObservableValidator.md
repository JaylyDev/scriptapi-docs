[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ObservableValidator

# Abstract Class: ObservableValidator\<T\>

Used for validating an observable value before it gets set

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ObservableValidator**\<`T`\>(): `ObservableValidator`\<`T`\>

#### Returns

`ObservableValidator`\<`T`\>

## Methods

### validate()

> `abstract` **validate**(`newValue`): `T` \| `undefined`

#### Parameters

##### newValue

`T`

#### Returns

`T` \| `undefined`

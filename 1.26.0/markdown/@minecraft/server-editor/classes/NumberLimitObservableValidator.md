[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / NumberLimitObservableValidator

# Class: NumberLimitObservableValidator

Validates min/max limits of observable objects that support
number

## Implements

- [`ObservableValidator`](ObservableValidator.md)\<`number`\>

## Constructors

### Constructor

> **new NumberLimitObservableValidator**(`min`, `max`, `isInteger?`): `NumberLimitObservableValidator`

#### Parameters

##### min

`number` \| `undefined`

##### max

`number` \| `undefined`

##### isInteger?

`boolean`

#### Returns

`NumberLimitObservableValidator`

#### Remarks

Constructs a new instance of the
`NumberLimitObservableValidator` class

## Properties

### \_isInteger?

> `protected` `optional` **\_isInteger?**: `boolean`

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### \_max?

> `protected` `optional` **\_max?**: `number`

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### \_min?

> `protected` `optional` **\_min?**: `number`

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### updateLimits()

> **updateLimits**(`min`, `max`): `void`

#### Parameters

##### min

`number` \| `undefined`

##### max

`number` \| `undefined`

#### Returns

`void`

***

### validate()

> **validate**(`newValue`): `number`

#### Parameters

##### newValue

`number`

#### Returns

`number`

#### Implementation of

[`ObservableValidator`](ObservableValidator.md).[`validate`](ObservableValidator.md#validate)

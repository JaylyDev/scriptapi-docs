[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / Vector3LimitObservableValidator

# Class: Vector3LimitObservableValidator

Validates min/max limits of observable objects that support
Vector3

## Implements

- [`ObservableValidator`](ObservableValidator.md)\<[`Vector3`](../../server/interfaces/Vector3.md)\>

## Constructors

### Constructor

> **new Vector3LimitObservableValidator**(`min`, `max`, `isInteger?`): `Vector3LimitObservableValidator`

#### Parameters

##### min

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

##### max

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

##### isInteger?

`boolean`

#### Returns

`Vector3LimitObservableValidator`

#### Remarks

Constructs a new instance of the
`Vector3LimitObservableValidator` class

## Properties

### \_isInteger?

> `protected` `optional` **\_isInteger?**: `boolean`

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### \_max

> `protected` **\_max**: `Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### \_min

> `protected` **\_min**: `Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### updateLimits()

> **updateLimits**(`min`, `max`): `void`

#### Parameters

##### min

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

##### max

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

`void`

***

### validate()

> **validate**(`newValue`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### newValue

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Implementation of

[`ObservableValidator`](ObservableValidator.md).[`validate`](ObservableValidator.md#validate)

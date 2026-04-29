[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / Vector2LimitObservableValidator

# Class: Vector2LimitObservableValidator

Validates min/max limits of observable objects that support
Vector2

## Source

```ts
export declare class Vector2LimitObservableValidator implements ObservableValidator<minecraftserver.Vector2> {
    protected _isInteger?: boolean;
    protected _max: Partial<minecraftserver.Vector2>;
    protected _min: Partial<minecraftserver.Vector2>;
    constructor(min: Partial<minecraftserver.Vector2>, max: Partial<minecraftserver.Vector2>, isInteger?: boolean);
    updateLimits(min: Partial<minecraftserver.Vector2>, max: Partial<minecraftserver.Vector2>): void;
    validate(newValue: minecraftserver.Vector2): minecraftserver.Vector2;
}
```

## Implements

- [`ObservableValidator`](ObservableValidator.md)\<[`Vector2`](../../server/interfaces/Vector2.md)\>

## Constructors

### Constructor

> **new Vector2LimitObservableValidator**(`min`, `max`, `isInteger?`): `Vector2LimitObservableValidator`

#### Parameters

##### min

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

##### max

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

##### isInteger?

`boolean`

#### Returns

`Vector2LimitObservableValidator`

#### Remarks

Constructs a new instance of the
`Vector2LimitObservableValidator` class

## Properties

### \_isInteger?

> `protected` `optional` **\_isInteger?**: `boolean`

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### \_max

> `protected` **\_max**: `Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### \_min

> `protected` **\_min**: `Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Remarks

This property can't be used in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### updateLimits()

> **updateLimits**(`min`, `max`): `void`

#### Parameters

##### min

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

##### max

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

`void`

***

### validate()

> **validate**(`newValue`): [`Vector2`](../../server/interfaces/Vector2.md)

#### Parameters

##### newValue

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

#### Implementation of

[`ObservableValidator`](ObservableValidator.md).[`validate`](ObservableValidator.md#validate)

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityAttributeComponent

# Class: EntityAttributeComponent

This is a base abstract class for any entity component that
centers around a number and can have a minimum, maximum, and
default defined value.

## Source

```ts
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    readonly currentValue: number;
    readonly defaultValue: number;
    readonly effectiveMax: number;
    readonly effectiveMin: number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrentValue(value: number): boolean;
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Extended by

- [`EntityExhaustionComponent`](EntityExhaustionComponent-1.md)
- [`EntityHealthComponent`](EntityHealthComponent-1.md)
- [`EntityHungerComponent`](EntityHungerComponent-1.md)
- [`EntityLavaMovementComponent`](EntityLavaMovementComponent-1.md)
- [`EntityMovementComponent`](EntityMovementComponent-1.md)
- [`EntitySaturationComponent`](EntitySaturationComponent-1.md)
- [`EntityUnderwaterMovementComponent`](EntityUnderwaterMovementComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityAttributeComponent**(): `EntityAttributeComponent`

#### Returns

`EntityAttributeComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### currentValue

> `readonly` **currentValue**: `number`

#### Remarks

Current value of this attribute for this instance.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### defaultValue

> `readonly` **defaultValue**: `number`

#### Remarks

Returns the default defined value for this attribute.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### effectiveMax

> `readonly` **effectiveMax**: `number`

#### Remarks

Returns the effective max of this attribute given any other
ambient components or factors.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### effectiveMin

> `readonly` **effectiveMin**: `number`

#### Remarks

Returns the effective min of this attribute given any other
ambient components or factors.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`entity`](EntityComponent-1.md#entity)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`isValid`](EntityComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`typeId`](EntityComponent-1.md#typeid)

## Methods

### resetToDefaultValue()

> **resetToDefaultValue**(): `void`

#### Returns

`void`

#### Remarks

Resets the current value of this attribute to the defined
default value.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### resetToMaxValue()

> **resetToMaxValue**(): `void`

#### Returns

`void`

#### Remarks

Resets the current value of this attribute to the maximum
defined value.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### resetToMinValue()

> **resetToMinValue**(): `void`

#### Returns

`void`

#### Remarks

Resets the current value of this attribute to the minimum
defined value.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setCurrentValue()

> **setCurrentValue**(`value`): `boolean`

#### Parameters

##### value

`number`

#### Returns

`boolean`

#### Remarks

Sets the current value of this attribute.

This function can't be called in restricted-execution mode.

#### Throws

If the value is out of bounds, an ArgumentOutOfBounds Error
is thrown.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This function can't be called in early-execution mode.

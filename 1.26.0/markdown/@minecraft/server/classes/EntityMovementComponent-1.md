[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityMovementComponent

# Class: EntityMovementComponent

Defines the general movement speed of this entity.

## Extends

- [`EntityAttributeComponent`](EntityAttributeComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityMovementComponent**(): `EntityMovementComponent`

#### Returns

`EntityMovementComponent`

#### Overrides

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`constructor`](EntityAttributeComponent-1.md#constructor)

## Properties

### currentValue

> `readonly` **currentValue**: `number`

#### Remarks

Current value of this attribute for this instance.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`currentValue`](EntityAttributeComponent-1.md#currentvalue)

***

### defaultValue

> `readonly` **defaultValue**: `number`

#### Remarks

Returns the default defined value for this attribute.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`defaultValue`](EntityAttributeComponent-1.md#defaultvalue)

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

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`effectiveMax`](EntityAttributeComponent-1.md#effectivemax)

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

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`effectiveMin`](EntityAttributeComponent-1.md#effectivemin)

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

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`entity`](EntityAttributeComponent-1.md#entity)

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

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`isValid`](EntityAttributeComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`typeId`](EntityAttributeComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:movement"` = `'minecraft:movement'`

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

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`resetToDefaultValue`](EntityAttributeComponent-1.md#resettodefaultvalue)

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

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`resetToMaxValue`](EntityAttributeComponent-1.md#resettomaxvalue)

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

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`resetToMinValue`](EntityAttributeComponent-1.md#resettominvalue)

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

#### Inherited from

[`EntityAttributeComponent`](EntityAttributeComponent-1.md).[`setCurrentValue`](EntityAttributeComponent-1.md#setcurrentvalue)

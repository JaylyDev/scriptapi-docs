[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityBaseMovementComponent

# Class: EntityBaseMovementComponent

Base class for a family of entity movement events.

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Extended by

- [`EntityMovementAmphibiousComponent`](EntityMovementAmphibiousComponent-1.md)
- [`EntityMovementBasicComponent`](EntityMovementBasicComponent-1.md)
- [`EntityMovementFlyComponent`](EntityMovementFlyComponent-1.md)
- [`EntityMovementGenericComponent`](EntityMovementGenericComponent-1.md)
- [`EntityMovementGlideComponent`](EntityMovementGlideComponent-1.md)
- [`EntityMovementHoverComponent`](EntityMovementHoverComponent-1.md)
- [`EntityMovementJumpComponent`](EntityMovementJumpComponent-1.md)
- [`EntityMovementSkipComponent`](EntityMovementSkipComponent-1.md)
- [`EntityMovementSwayComponent`](EntityMovementSwayComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityBaseMovementComponent**(): `EntityBaseMovementComponent`

#### Returns

`EntityBaseMovementComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

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

### maxTurn

> `readonly` **maxTurn**: `number`

#### Remarks

Maximum turn rate for this movement modality of the mob.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`typeId`](EntityComponent-1.md#typeid)

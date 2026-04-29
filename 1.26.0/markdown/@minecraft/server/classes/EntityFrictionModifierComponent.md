[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityFrictionModifierComponent

# Class: EntityFrictionModifierComponent

Defines how much friction affects this entity.

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityFrictionModifierComponent**(): `EntityFrictionModifierComponent`

#### Returns

`EntityFrictionModifierComponent`

#### Overrides

[`EntityComponent`](EntityComponent.md).[`constructor`](EntityComponent.md#constructor)

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`entity`](EntityComponent.md#entity)

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

[`EntityComponent`](EntityComponent.md).[`isValid`](EntityComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### value

> `readonly` **value**: `number`

#### Remarks

Current value of the friction modifier of the associated
entity.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:friction_modifier"` = `'minecraft:friction_modifier'`

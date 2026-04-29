[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityMovementAmphibiousComponent

# Class: EntityMovementAmphibiousComponent

When added, this movement control allows the mob to swim in
water and walk on land.

## Source

```ts
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}
```

## Extends

- [`EntityBaseMovementComponent`](EntityBaseMovementComponent.md)

## Constructors

### Constructor

> `private` **new EntityMovementAmphibiousComponent**(): `EntityMovementAmphibiousComponent`

#### Returns

`EntityMovementAmphibiousComponent`

#### Overrides

[`EntityBaseMovementComponent`](EntityBaseMovementComponent.md).[`constructor`](EntityBaseMovementComponent.md#constructor)

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

[`EntityBaseMovementComponent`](EntityBaseMovementComponent.md).[`entity`](EntityBaseMovementComponent.md#entity)

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

[`EntityBaseMovementComponent`](EntityBaseMovementComponent.md).[`isValid`](EntityBaseMovementComponent.md#isvalid)

***

### maxTurn

> `readonly` **maxTurn**: `number`

#### Remarks

Maximum turn rate for this movement modality of the mob.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityBaseMovementComponent`](EntityBaseMovementComponent.md).[`maxTurn`](EntityBaseMovementComponent.md#maxturn)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityBaseMovementComponent`](EntityBaseMovementComponent.md).[`typeId`](EntityBaseMovementComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:movement.amphibious"` = `'minecraft:movement.amphibious'`

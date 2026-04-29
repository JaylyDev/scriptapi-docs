[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityMovementGlideComponent

# Class: EntityMovementGlideComponent

When added, this movement control allows the mob to glide.

## Example

```js
import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
   const movementGlide = entity.getComponent("movement.glide");
   movementGlide.maxTurn;
   movementGlide.speedWhenTurning;
   movementGlide.startSpeed;
   movementGlide.startSpeed;
   movementGlide.isValid;
});
```

## Source

```ts
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    readonly speedWhenTurning: number;
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}
```

## Extends

- [`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityMovementGlideComponent**(): `EntityMovementGlideComponent`

#### Returns

`EntityMovementGlideComponent`

#### Overrides

[`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md).[`constructor`](EntityBaseMovementComponent-1.md#constructor)

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

[`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md).[`entity`](EntityBaseMovementComponent-1.md#entity)

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

[`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md).[`isValid`](EntityBaseMovementComponent-1.md#isvalid)

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

[`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md).[`maxTurn`](EntityBaseMovementComponent-1.md#maxturn)

***

### speedWhenTurning

> `readonly` **speedWhenTurning**: `number`

#### Remarks

Speed in effect when the entity is turning.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### startSpeed

> `readonly` **startSpeed**: `number`

#### Remarks

Start speed during a glide.

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

[`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md).[`typeId`](EntityBaseMovementComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:movement.glide"` = `'minecraft:movement.glide'`

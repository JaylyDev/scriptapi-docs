[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityMovementSwayComponent

# Class: EntityMovementSwayComponent

When added, this move control causes the mob to sway side to
side giving the impression it is swimming.

## Example

```js
import { world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
   const movementSway = entity.getComponent("movement.sway");
   movementSway.swayAmplitude;
   movementSway.swayFrequency;
   movementSway.isValid;
});
```

## Source

```ts
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    readonly swayAmplitude: number;
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}
```

## Extends

- [`EntityBaseMovementComponent`](EntityBaseMovementComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityMovementSwayComponent**(): `EntityMovementSwayComponent`

#### Returns

`EntityMovementSwayComponent`

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

### swayAmplitude

> `readonly` **swayAmplitude**: `number`

#### Remarks

Amplitude of the sway motion.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### swayFrequency

> `readonly` **swayFrequency**: `number`

#### Remarks

Amount of sway frequency.

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

> `readonly` `static` **componentId**: `"minecraft:movement.sway"` = `'minecraft:movement.sway'`

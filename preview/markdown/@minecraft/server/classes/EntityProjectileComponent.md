[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityProjectileComponent

# Class: EntityProjectileComponent

The projectile component controls the properties of a
projectile entity and allows it to be shot in a given
direction.
This component is present when the entity has the
minecraft:projectile component.

## Example

```typescript
import { DimensionLocation, EntityProjectileComponent } from '@minecraft/server';

function shootArrow(targetLocation: DimensionLocation) {
  const velocity = { x: 0, y: 1, z: 5 };

  const arrow = targetLocation.dimension.spawnEntity('minecraft:arrow', {
    x: targetLocation.x,
    y: targetLocation.y + 2,
    z: targetLocation.z,
  });

  const projectileComp = arrow.getComponent('minecraft:projectile') as EntityProjectileComponent;

  projectileComp?.shoot(velocity);
}
```

## Source

```ts
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    airInertia: number;
    catchFireOnHurt: boolean;
    critParticlesOnProjectileHurt: boolean;
    destroyOnProjectileHurt: boolean;
    gravity: number;
    hitEntitySound?: string;
    hitGroundSound?: string;
    hitParticle?: string;
    lightningStrikeOnHit: boolean;
    liquidInertia: number;
    onFireTime: number;
    owner?: Entity;
    shouldBounceOnHit: boolean;
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityProjectileComponent**(): `EntityProjectileComponent`

#### Returns

`EntityProjectileComponent`

#### Overrides

[`EntityComponent`](EntityComponent.md).[`constructor`](EntityComponent.md#constructor)

## Properties

### airInertia

> **airInertia**: `number`

#### Remarks

The fraction of the projectile's speed maintained every tick
while traveling through air.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### catchFireOnHurt

> **catchFireOnHurt**: `boolean`

#### Remarks

If true, the entity will be set on fire when hurt. The
default burn duration is 5 seconds. This duration can be
modified via the onFireTime property. The entity will not
catch fire if immune or if the entity is wet.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### critParticlesOnProjectileHurt

> **critParticlesOnProjectileHurt**: `boolean`

#### Remarks

If true, the projectile will spawn crit particles when hit
by a player. E.g. Player attacking a Shulker bullet.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### destroyOnProjectileHurt

> **destroyOnProjectileHurt**: `boolean`

#### Remarks

If true, the projectile will be destroyed when it takes
damage. E.g. Player attacking a Shulker bullet.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

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

### gravity

> **gravity**: `number`

#### Remarks

The gravity applied to the projectile. When the entity is
not on the ground, subtracts this amount from the
projectile’s change in vertical position every tick. The
higher the value, the faster the projectile falls. If
negative, the entity will rise instead of fall.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### hitEntitySound?

> `optional` **hitEntitySound?**: `string`

#### Remarks

The sound that plays when the projectile hits an entity.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### hitGroundSound?

> `optional` **hitGroundSound?**: `string`

#### Remarks

The sound that plays when the projectile hits a block.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### hitParticle?

> `optional` **hitParticle?**: `string`

#### Remarks

The particle that spawns when the projectile hits something.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

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

### lightningStrikeOnHit

> **lightningStrikeOnHit**: `boolean`

#### Remarks

If true and the weather is thunder and the entity has line
of sight to the sky, the entity will be struck by lightning
when hit. E.g. A thrown Trident with the Channeling
enchantment.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### liquidInertia

> **liquidInertia**: `number`

#### Remarks

The fraction of the projectile's speed maintained every tick
while traveling through a liquid.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### onFireTime

> **onFireTime**: `number`

#### Remarks

Duration in seconds that the entity hit will be on fire for
when catchFireOnHurt is set to true.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### owner?

> `optional` **owner?**: [`Entity`](Entity.md)

#### Remarks

The owner of the projectile. This is used to determine what
the projectile can collide with and damage. It also
determines which entity is assigned as the attacker.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### shouldBounceOnHit

> **shouldBounceOnHit**: `boolean`

#### Remarks

If true, the projectile will bounce off mobs when no damage
is taken. E.g. A spawning wither.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### stopOnHit

> **stopOnHit**: `boolean`

#### Remarks

If true, the projectile will stop moving when an entity is
hit as thought it had been blocked. E.g. Thrown trident on
hit behavior.

This property can't be edited in restricted-execution mode.

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

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:projectile"` = `'minecraft:projectile'`

## Methods

### shoot()

> **shoot**(`velocity`, `options?`): `void`

#### Parameters

##### velocity

[`Vector3`](../interfaces/Vector3.md)

The velocity to fire the projectile. This controls both the
speed and direction which which the projectile will be shot.

##### options?

[`ProjectileShootOptions`](../interfaces/ProjectileShootOptions.md)

Optional configuration for the shoot.

#### Returns

`void`

#### Remarks

Shoots the projectile with a given velocity. The projectile
will be shot from its current location.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the component or entity no longer exist.

#### World Ready

This function can't be called in early-execution mode.

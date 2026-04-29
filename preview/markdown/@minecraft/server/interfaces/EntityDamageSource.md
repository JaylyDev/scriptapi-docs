[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityDamageSource

# Interface: EntityDamageSource

Provides information about how damage has been applied to an
entity.

## Source

```ts
export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}
```

## Properties

### cause

> **cause**: [`EntityDamageCause`](../enumerations/EntityDamageCause.md)

#### Remarks

Cause enumeration of damage.

***

### damagingEntity?

> `optional` **damagingEntity?**: [`Entity`](../classes/Entity.md)

#### Remarks

Optional entity that caused the damage.

***

### damagingProjectile?

> `optional` **damagingProjectile?**: [`Entity`](../classes/Entity.md)

#### Remarks

Optional projectile that may have caused damage.

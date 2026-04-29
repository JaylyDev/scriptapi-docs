[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityDamageSource

# Interface: EntityDamageSource

Provides information about how damage has been applied to an
entity.

## Properties

### cause

> **cause**: [`EntityDamageCause`](../enumerations/EntityDamageCause-1.md)

#### Remarks

Cause enumeration of damage.

***

### damagingEntity?

> `optional` **damagingEntity?**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Optional entity that caused the damage.

***

### damagingProjectile?

> `optional` **damagingProjectile?**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Optional projectile that may have caused damage.

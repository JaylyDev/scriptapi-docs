[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityApplyDamageByProjectileOptions

# Interface: EntityApplyDamageByProjectileOptions

Additional options for when damage has been applied via a
projectile.

## Source

```ts
export interface EntityApplyDamageByProjectileOptions {
    damagingEntity?: Entity;
    damagingProjectile: Entity;
}
```

## Properties

### damagingEntity?

> `optional` **damagingEntity?**: [`Entity`](../classes/Entity.md)

#### Remarks

Optional entity that fired the projectile.

***

### damagingProjectile

> **damagingProjectile**: [`Entity`](../classes/Entity.md)

#### Remarks

Projectile that caused damage.

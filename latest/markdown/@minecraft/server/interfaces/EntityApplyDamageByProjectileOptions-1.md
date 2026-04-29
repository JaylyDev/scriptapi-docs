[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityApplyDamageByProjectileOptions

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

> `optional` **damagingEntity?**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Optional entity that fired the projectile.

***

### damagingProjectile

> **damagingProjectile**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Projectile that caused damage.

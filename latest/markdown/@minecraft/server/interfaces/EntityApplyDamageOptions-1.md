[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityApplyDamageOptions

# Interface: EntityApplyDamageOptions

Additional descriptions and metadata for a damage event.

## Source

```ts
export interface EntityApplyDamageOptions {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
}
```

## Properties

### cause

> **cause**: [`EntityDamageCause`](../enumerations/EntityDamageCause-1.md)

#### Remarks

Underlying cause of the damage.

***

### damagingEntity?

> `optional` **damagingEntity?**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Optional entity that caused the damage.

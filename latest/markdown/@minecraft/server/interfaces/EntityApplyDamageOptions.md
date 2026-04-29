[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityApplyDamageOptions

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

> **cause**: [`EntityDamageCause`](../enumerations/EntityDamageCause.md)

#### Remarks

Underlying cause of the damage.

***

### damagingEntity?

> `optional` **damagingEntity?**: [`Entity`](../classes/Entity.md)

#### Remarks

Optional entity that caused the damage.

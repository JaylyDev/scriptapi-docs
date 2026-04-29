[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHurtBeforeEventOptions

# Interface: EntityHurtBeforeEventOptions

Contains optional parameters for registering an entity hurt
before event.

## Source

```ts
export interface EntityHurtBeforeEventOptions {
    allowedDamageCauses?: EntityDamageCause[];
    entityFilter?: EntityFilter;
}
```

## Properties

### allowedDamageCauses?

> `optional` **allowedDamageCauses?**: [`EntityDamageCause`](../enumerations/EntityDamageCause-1.md)[]

#### Remarks

If this value is set, this event will only fire for damage
causes that match.

***

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

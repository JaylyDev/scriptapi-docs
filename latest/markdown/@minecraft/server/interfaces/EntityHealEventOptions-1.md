[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealEventOptions

# Interface: EntityHealEventOptions

Contains optional parameters for registering an entity heal
event.

## Source

```ts
export interface EntityHealEventOptions {
    allowedHealCauses?: EntityHealCause[];
    entityFilter?: EntityFilter;
}
```

## Properties

### allowedHealCauses?

> `optional` **allowedHealCauses?**: [`EntityHealCause`](../enumerations/EntityHealCause-1.md)[]

#### Remarks

If this value is set, this event will only fire for healing
causes that match.

***

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

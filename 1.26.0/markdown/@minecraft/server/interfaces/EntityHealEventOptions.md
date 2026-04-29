[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealEventOptions

# Interface: EntityHealEventOptions

**`Beta`**

Contains optional parameters for registering an entity heal
event.

## Properties

### allowedHealCauses?

> `optional` **allowedHealCauses?**: [`EntityHealCause`](../enumerations/EntityHealCause.md)[]

#### Remarks

If this value is set, this event will only fire for healing
causes that match.

***

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

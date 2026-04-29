[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityHurtAfterEventOptions

# Interface: EntityHurtAfterEventOptions

Contains optional parameters for registering an entity hurt
after event.

## Source

```ts
export interface EntityHurtAfterEventOptions {
    allowedDamageCauses?: EntityDamageCause[];
    entities?: Entity[];
    entityFilter?: EntityFilter;
    entityTypes?: string[];
}
```

## Properties

### allowedDamageCauses?

> `optional` **allowedDamageCauses?**: [`EntityDamageCause`](../enumerations/EntityDamageCause.md)[]

#### Remarks

If this value is set, this event will only fire for damage
causes that match.

***

### entities?

> `optional` **entities?**: [`Entity`](../classes/Entity.md)[]

#### Remarks

If this value is set, this event will only fire for entities
that match the entities within this collection.

***

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

***

### entityTypes?

> `optional` **entityTypes?**: `string`[]

#### Remarks

If this value is set, this event will only fire if the
impacted entities' type matches this parameter.

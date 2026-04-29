[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityEventOptions

# Interface: EntityEventOptions

Contains optional parameters for registering an entity
event.

## Source

```ts
export interface EntityEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
}
```

## Properties

### entities?

> `optional` **entities?**: [`Entity`](../classes/Entity.md)[]

#### Remarks

If this value is set, this event will only fire for entities
that match the entities within this collection.

***

### entityTypes?

> `optional` **entityTypes?**: `string`[]

#### Remarks

If this value is set, this event will only fire if the
impacted entities' type matches this parameter.

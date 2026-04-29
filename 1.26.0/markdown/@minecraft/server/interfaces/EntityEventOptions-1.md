[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityEventOptions

# Interface: EntityEventOptions

Contains optional parameters for registering an entity
event.

## Properties

### entities?

> `optional` **entities?**: [`Entity`](../classes/Entity-1.md)[]

#### Remarks

If this value is set, this event will only fire for entities
that match the entities within this collection.

***

### entityTypes?

> `optional` **entityTypes?**: `string`[]

#### Remarks

If this value is set, this event will only fire if the
impacted entities' type matches this parameter.

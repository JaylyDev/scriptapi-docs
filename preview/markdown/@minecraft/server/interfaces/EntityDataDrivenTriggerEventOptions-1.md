[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityDataDrivenTriggerEventOptions

# Interface: EntityDataDrivenTriggerEventOptions

Specifies additional filters that are used in registering a
data driven trigger event for entities.

## Source

```ts
export interface EntityDataDrivenTriggerEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
    eventTypes?: string[];
}
```

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

***

### eventTypes?

> `optional` **eventTypes?**: `string`[]

#### Remarks

If this value is set, this event will only fire if the
impacted triggered event matches one of the events listed in
this parameter.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemDropEventOptions

# Interface: EntityItemDropEventOptions

An interface that is passed into [EntityItemDropAfterEventSignal.subscribe](../classes/EntityItemDropAfterEventSignal-1.md#subscribe) that filters out
which events are passed to the provided callback.

## Source

```ts
export interface EntityItemDropEventOptions {
    entityFilter?: EntityFilter;
    itemFilter?: ItemFilter;
}
```

## Properties

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

***

### itemFilter?

> `optional` **itemFilter?**: [`ItemFilter`](ItemFilter-1.md)

#### Remarks

If this value is set, this event will only fire if an item
in the event matches.

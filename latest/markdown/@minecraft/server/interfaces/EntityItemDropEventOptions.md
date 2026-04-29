[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityItemDropEventOptions

# Interface: EntityItemDropEventOptions

An interface that is passed into @minecraft/Server.EntityItemDropAfterEventSignal.subscribe
that filters out which events are passed to the provided
callback.

## Source

```ts
export interface EntityItemDropEventOptions {
    entityFilter?: EntityFilter;
    itemFilter?: ItemFilter;
}
```

## Properties

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

***

### itemFilter?

> `optional` **itemFilter?**: [`ItemFilter`](ItemFilter.md)

#### Remarks

If this value is set, this event will only fire if an item
in the event matches.

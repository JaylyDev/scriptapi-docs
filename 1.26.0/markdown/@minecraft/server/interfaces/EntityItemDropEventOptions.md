[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemDropEventOptions

# Interface: EntityItemDropEventOptions

**`Beta`**

An interface that is passed into @minecraft/Server.EntityItemDropAfterEventSignal.subscribe
that filters out which events are passed to the provided
callback.

## Properties

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

If this value is set, this event will only fire for entities
that match.

***

### itemFilter?

> `optional` **itemFilter?**: [`ItemFilter`](ItemFilter.md)

#### Remarks

If this value is set, this event will only fire if an item
in the event matches.

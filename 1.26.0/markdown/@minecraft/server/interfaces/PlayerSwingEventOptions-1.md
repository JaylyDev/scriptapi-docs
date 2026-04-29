[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerSwingEventOptions

# Interface: PlayerSwingEventOptions

An interface that is passed into @minecraft/Server.PlayerSwingStartAfterEvent.subscribe that
filters out which events are passed to the provided
callback.

## Properties

### heldItemOption?

> `optional` **heldItemOption?**: [`HeldItemOption`](../enumerations/HeldItemOption-1.md)

#### Remarks

The held item option that the callback should be called for.
If undefined, the callback will be called whether or not the
player is holding an item in their hand.

***

### swingSource?

> `optional` **swingSource?**: [`EntitySwingSource`](../enumerations/EntitySwingSource-1.md)

#### Remarks

The [EntitySwingSource](../enumerations/EntitySwingSource-1.md) that the callback should be
called for. If undefined, the callback will be called for
all swing sources.

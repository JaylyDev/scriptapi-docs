[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerSwingEventOptions

# Interface: PlayerSwingEventOptions

An interface that is passed into @minecraft/Server.PlayerSwingStartAfterEvent.subscribe that
filters out which events are passed to the provided
callback.

## Source

```ts
export interface PlayerSwingEventOptions {
    heldItemOption?: HeldItemOption;
    swingSource?: EntitySwingSource;
}
```

## Properties

### heldItemOption?

> `optional` **heldItemOption?**: [`HeldItemOption`](../enumerations/HeldItemOption.md)

#### Remarks

The held item option that the callback should be called for.
If undefined, the callback will be called whether or not the
player is holding an item in their hand.

***

### swingSource?

> `optional` **swingSource?**: [`EntitySwingSource`](../enumerations/EntitySwingSource.md)

#### Remarks

The [EntitySwingSource](../enumerations/EntitySwingSource.md) that the callback should be
called for. If undefined, the callback will be called for
all swing sources.

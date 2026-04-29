[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / HotbarEventOptions

# Interface: HotbarEventOptions

Contains additional filtering options for hotbar events.

## Source

```ts
export interface HotbarEventOptions {
    allowedSlots?: number[];
}
```

## Properties

### allowedSlots?

> `optional` **allowedSlots?**: `number`[]

#### Remarks

The slot indexes to consider. Values should be between 0 and
8, inclusive. If not specified, all slots are considered.

Bounds: [0, 8]

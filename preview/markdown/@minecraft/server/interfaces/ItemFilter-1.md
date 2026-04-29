[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemFilter

# Interface: ItemFilter

Contains options for filtering items.

## Source

```ts
export interface ItemFilter {
    includeTypes?: (ItemType | string)[];
}
```

## Properties

### includeTypes?

> `optional` **includeTypes?**: (`string` \| [`ItemType`](../classes/ItemType-1.md))[]

#### Remarks

If defined, items that match these types are included.

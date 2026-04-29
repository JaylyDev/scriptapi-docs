[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityContainerAccessEventOptions

# Interface: EntityContainerAccessEventOptions

**`Beta`**

Options used to filter entity container access events.

## Source

```ts
export interface EntityContainerAccessEventOptions {
    accessSourceFilter?: ContainerAccessSourceFilter;
    entityFilter?: EntityFilter;
}
```

## Properties

### accessSourceFilter?

> `optional` **accessSourceFilter?**: [`ContainerAccessSourceFilter`](ContainerAccessSourceFilter.md)

#### Remarks

If present will filter which container access sources can
trigger the event.

***

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

If present will filter which entity containers can trigger
the event.

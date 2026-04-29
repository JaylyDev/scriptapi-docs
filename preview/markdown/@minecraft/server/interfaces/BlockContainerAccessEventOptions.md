[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockContainerAccessEventOptions

# Interface: BlockContainerAccessEventOptions

**`Beta`**

Options used to filter block container access events.

## Source

```ts
export interface BlockContainerAccessEventOptions {
    accessSourceFilter?: ContainerAccessSourceFilter;
    blockFilter?: BlockFilter;
}
```

## Properties

### accessSourceFilter?

> `optional` **accessSourceFilter?**: [`ContainerAccessSourceFilter`](ContainerAccessSourceFilter.md)

#### Remarks

If present will filter which container access sources can
trigger the event.

***

### blockFilter?

> `optional` **blockFilter?**: [`BlockFilter`](BlockFilter-1.md)

#### Remarks

If present will filter which container blocks can trigger
the event.

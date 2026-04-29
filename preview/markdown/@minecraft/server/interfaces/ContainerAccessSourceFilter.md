[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ContainerAccessSourceFilter

# Interface: ContainerAccessSourceFilter

**`Beta`**

Options for use when filtering container access sources.

## Source

```ts
export interface ContainerAccessSourceFilter {
    entityFilter?: EntityFilter;
}
```

## Properties

### entityFilter?

> `optional` **entityFilter?**: [`EntityFilter`](EntityFilter-1.md)

#### Remarks

Filter options for the source entity accessing the
container.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / TickingAreaOptions

# Interface: TickingAreaOptions

Options to create a ticking area using the [TickingAreaManager](../classes/TickingAreaManager-1.md).

## Source

```ts
export interface TickingAreaOptions {
    dimension: Dimension;
    from: Vector3;
    to: Vector3;
}
```

## Properties

### dimension

> **dimension**: [`Dimension`](../classes/Dimension-1.md)

#### Remarks

The dimension the ticking area will be in.

***

### from

> **from**: [`Vector3`](Vector3-1.md)

#### Remarks

Corner block location of the bounding box.

***

### to

> **to**: [`Vector3`](Vector3-1.md)

#### Remarks

Opposite corner block location of the bounding box.

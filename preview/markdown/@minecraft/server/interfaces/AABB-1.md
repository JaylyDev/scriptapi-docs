[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / AABB

# Interface: AABB

Axis-aligned bounding box.

## Source

```ts
export interface AABB {
    center: Vector3;
    extent: Vector3;
}
```

## Properties

### center

> **center**: [`Vector3`](Vector3-1.md)

#### Remarks

The centerpoint of the box.

***

### extent

> **extent**: [`Vector3`](Vector3-1.md)

#### Remarks

Absolute distance from the centerpoint to the bounds of the
box. Equivalent to half of the box's length, height and
width. Will always be treated as positive.

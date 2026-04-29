[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / AABB

# Interface: AABB

Axis-aligned bounding box.

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

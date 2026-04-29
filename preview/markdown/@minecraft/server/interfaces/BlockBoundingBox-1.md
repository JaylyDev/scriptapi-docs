[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockBoundingBox

# Interface: BlockBoundingBox

A BlockBoundingBox is an interface to an object which
represents an AABB aligned rectangle.
The BlockBoundingBox assumes that it was created in a valid
state (min <= max) but cannot guarantee it (unless it was
created using the associated [BlockBoundingBoxUtils](../classes/BlockBoundingBoxUtils.md)
utility functions.
The min/max coordinates represent the diametrically opposite
corners of the rectangle.
The BlockBoundingBox is not a representation of blocks - it
has no association with any type, it is just a mathematical
construct - so a rectangle with
( 0,0,0 ) -> ( 0,0,0 )
has a size of ( 0,0,0 ) (unlike the very similar [BlockVolume](../classes/BlockVolume-1.md) object)

## Source

```ts
export interface BlockBoundingBox {
    max: Vector3;
    min: Vector3;
}
```

## Properties

### max

> **max**: [`Vector3`](Vector3-1.md)

#### Remarks

A [Vector3](Vector3-1.md) that represents the largest corner of the
rectangle

***

### min

> **min**: [`Vector3`](Vector3-1.md)

#### Remarks

A [Vector3](Vector3-1.md) that represents the smallest corner of the
rectangle

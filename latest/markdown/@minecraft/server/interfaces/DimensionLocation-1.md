[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / DimensionLocation

# Interface: DimensionLocation

An exact coordinate within the world, including its
dimension and location.

## Source

```ts
export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
}
```

## Properties

### dimension

> **dimension**: [`Dimension`](../classes/Dimension-1.md)

#### Remarks

Dimension that this coordinate is associated with.

***

### x

> **x**: `number`

#### Remarks

X component of this dimension-location.

***

### y

> **y**: `number`

#### Remarks

Y component of this dimension-location.

***

### z

> **z**: `number`

#### Remarks

Z component of this dimension-location.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / WaypointTextureBounds

# Interface: WaypointTextureBounds

**`Beta`**

Defines a texture and the distance range in which it should
be displayed. Used within a [WaypointTextureSelector](WaypointTextureSelector.md)
to create distance-based texture switching.

## Source

```ts
export interface WaypointTextureBounds {
    lowerBound: number;
    texture: CustomTexture | WaypointTexture;
    upperBound?: number;
}
```

## Properties

### lowerBound

> **lowerBound**: `number`

#### Remarks

The lower distance bound for this texture. The texture is
displayed when the distance to the waypoint is greater than
this value. Value must be greater than or equal to 0.

Minimum Value: 0

***

### texture

> **texture**: [`CustomTexture`](CustomTexture.md) \| [`WaypointTexture`](../enumerations/WaypointTexture.md)

#### Remarks

The [WaypointTexture](../enumerations/WaypointTexture.md) or [CustomTexture](CustomTexture.md) to
display within this distance range.

***

### upperBound?

> `optional` **upperBound?**: `number`

#### Remarks

The upper distance bound for this texture. The texture is
displayed when the distance to the waypoint is less than or
equal to this value. If undefined, there is no upper limit.
Value must be greater than or equal to 0.

Minimum Value: 0

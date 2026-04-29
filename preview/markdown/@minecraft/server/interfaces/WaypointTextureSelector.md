[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / WaypointTextureSelector

# Interface: WaypointTextureSelector

**`Beta`**

Defines how waypoint textures change based on distance.
Contains a list of texture bounds that determine which
texture is displayed at different distance ranges.

## Source

```ts
export interface WaypointTextureSelector {
    textureBoundsList: WaypointTextureBounds[];
}
```

## Properties

### textureBoundsList

> **textureBoundsList**: [`WaypointTextureBounds`](WaypointTextureBounds.md)[]

#### Remarks

An array of [WaypointTextureBounds](WaypointTextureBounds.md) that define which
textures are displayed at different distance ranges. The
system evaluates these bounds to determine the appropriate
texture based on the current distance to the waypoint. The
list has a maximum size limit of 16.

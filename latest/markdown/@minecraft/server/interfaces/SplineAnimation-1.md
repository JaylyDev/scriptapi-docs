[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / SplineAnimation

# Interface: SplineAnimation

Collection of key frames for camera animation.

## Source

```ts
export interface SplineAnimation {
    progressKeyFrames: ProgressKeyFrame[];
    rotationKeyFrames: RotationKeyFrame[];
}
```

## Properties

### progressKeyFrames

> **progressKeyFrames**: [`ProgressKeyFrame`](ProgressKeyFrame-1.md)[]

#### Remarks

Key frames for camera progress along a given curve.

***

### rotationKeyFrames

> **rotationKeyFrames**: [`RotationKeyFrame`](RotationKeyFrame-1.md)[]

#### Remarks

Key frames for camera rotation.

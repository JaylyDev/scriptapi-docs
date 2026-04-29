[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SplineAnimation

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

> **progressKeyFrames**: [`ProgressKeyFrame`](ProgressKeyFrame.md)[]

#### Remarks

Key frames for camera progress along a given curve.

***

### rotationKeyFrames

> **rotationKeyFrames**: [`RotationKeyFrame`](RotationKeyFrame.md)[]

#### Remarks

Key frames for camera rotation.

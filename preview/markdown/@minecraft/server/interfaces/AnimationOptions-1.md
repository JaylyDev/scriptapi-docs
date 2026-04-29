[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / AnimationOptions

# Interface: AnimationOptions

Used to create camera animations.

## Source

```ts
export interface AnimationOptions {
    animation: SplineAnimation;
    totalTimeSeconds: number;
}
```

## Properties

### animation

> **animation**: [`SplineAnimation`](SplineAnimation-1.md)

#### Remarks

Key frames for the camera animation.

***

### totalTimeSeconds

> **totalTimeSeconds**: `number`

#### Remarks

Total time of the camera animation in seconds.

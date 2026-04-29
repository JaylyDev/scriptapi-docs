[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / CameraFadeTimeOptions

# Interface: CameraFadeTimeOptions

Contains timings for a fade transition.

## Source

```ts
export interface CameraFadeTimeOptions {
    fadeInTime: number;
    fadeOutTime: number;
    holdTime: number;
}
```

## Properties

### fadeInTime

> **fadeInTime**: `number`

#### Remarks

Time, in seconds, for a fade-in.

***

### fadeOutTime

> **fadeOutTime**: `number`

#### Remarks

Time, in seconds, for a fade-out.

***

### holdTime

> **holdTime**: `number`

#### Remarks

Time, in seconds, to hold the full screen color.

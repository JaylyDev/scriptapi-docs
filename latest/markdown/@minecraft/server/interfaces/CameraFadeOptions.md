[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / CameraFadeOptions

# Interface: CameraFadeOptions

Used to initiate a full-screen color fade.

## Source

```ts
export interface CameraFadeOptions {
    fadeColor?: RGB;
    fadeTime?: CameraFadeTimeOptions;
}
```

## Properties

### fadeColor?

> `optional` **fadeColor?**: [`RGB`](RGB.md)

#### Remarks

Fade color to use.

***

### fadeTime?

> `optional` **fadeTime?**: [`CameraFadeTimeOptions`](CameraFadeTimeOptions.md)

#### Remarks

Time in seconds for the fade-in, hold, and fade-out seconds.

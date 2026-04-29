[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ProgressKeyFrame

# Interface: ProgressKeyFrame

**`Beta`**

Key frame that holds the progress of the camera animation.

## Properties

### alpha

> **alpha**: `number`

#### Remarks

Value to denote how far along the curve the camera will be.
Values are [0.0, 1.0] inclusive.

***

### easingFunc?

> `optional` **easingFunc?**: [`EasingType`](../enumerations/EasingType-1.md)

#### Remarks

The optional easing type that the frame will use for
position.

***

### timeSeconds

> **timeSeconds**: `number`

#### Remarks

Time value that the camera will be at the given alpha.

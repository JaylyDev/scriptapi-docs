[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / RotationKeyFrame

# Interface: RotationKeyFrame

**`Beta`**

Key frame that holds the rotation of the camera animation.

## Properties

### easingFunc?

> `optional` **easingFunc?**: [`EasingType`](../enumerations/EasingType-1.md)

#### Remarks

The optional easing type that the frame will use for
rotation.

***

### rotation

> **rotation**: [`Vector3`](Vector3-1.md)

#### Remarks

Value of the rotation of the camera.

***

### timeSeconds

> **timeSeconds**: `number`

#### Remarks

Time value that the camera will be at the given rotation.

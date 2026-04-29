[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CameraFixedBoomOptions

# Interface: CameraFixedBoomOptions

Options to control pivot points and offsets of the third
person boom preset.

## Source

```ts
export interface CameraFixedBoomOptions {
    entityOffset?: Vector3;
    viewOffset?: Vector2;
}
```

## Properties

### entityOffset?

> `optional` **entityOffset?**: [`Vector3`](Vector3-1.md)

#### Remarks

Changes the pivot point to be <x, y, z> away from the
player.

***

### viewOffset?

> `optional` **viewOffset?**: [`Vector2`](Vector2-1.md)

#### Remarks

Offsets the camera from center by <x, y>.

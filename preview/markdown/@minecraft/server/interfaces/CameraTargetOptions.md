[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / CameraTargetOptions

# Interface: CameraTargetOptions

Used to target an entity with a free camera.

## Source

```ts
export interface CameraTargetOptions {
    offsetFromTargetCenter?: Vector3;
    targetEntity: Entity;
}
```

## Properties

### offsetFromTargetCenter?

> `optional` **offsetFromTargetCenter?**: [`Vector3`](Vector3.md)

#### Remarks

Set an <x, y, z> offset from the target entity's center.

***

### targetEntity

> **targetEntity**: [`Entity`](../classes/Entity.md)

#### Remarks

The singular entity you want to target.

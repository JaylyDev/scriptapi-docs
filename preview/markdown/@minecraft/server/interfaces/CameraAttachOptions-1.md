[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CameraAttachOptions

# Interface: CameraAttachOptions

Used to attach the camera to a non player entity.

## Source

```ts
export interface CameraAttachOptions {
    entity: Entity;
    locator: EntityAttachPoint;
}
```

## Properties

### entity

> **entity**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Set a non player entity for the camera to target.

***

### locator

> **locator**: [`EntityAttachPoint`](../enumerations/EntityAttachPoint-1.md)

#### Remarks

The location of the entity that you want to target (eg.
head, feet, eyes).

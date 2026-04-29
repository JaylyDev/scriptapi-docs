[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / CameraAttachOptions

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

> **entity**: [`Entity`](../classes/Entity.md)

#### Remarks

Set a non player entity for the camera to target.

***

### locator

> **locator**: [`EntityAttachPoint`](../enumerations/EntityAttachPoint.md)

#### Remarks

The location of the entity that you want to target (eg.
head, feet, eyes).

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityRaycastHit

# Interface: EntityRaycastHit

Contains information for entity raycast hit results.

## Source

```ts
export interface EntityRaycastHit {
    distance: number;
    entity: Entity;
}
```

## Properties

### distance

> **distance**: `number`

#### Remarks

Distance from ray origin to entity bounds.

***

### entity

> **entity**: [`Entity`](../classes/Entity.md)

#### Remarks

Entity that was hit.

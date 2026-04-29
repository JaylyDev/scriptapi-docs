[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityRaycastHit

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

> **entity**: [`Entity`](../classes/Entity-1.md)

#### Remarks

Entity that was hit.

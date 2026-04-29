[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHitEntityAfterEvent

# Class: EntityHitEntityAfterEvent

Contains information related to an entity hitting (melee
attacking) another entity.

## Source

```ts
export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntityHitEntityAfterEvent**(): `EntityHitEntityAfterEvent`

#### Returns

`EntityHitEntityAfterEvent`

## Properties

### damagingEntity

> `readonly` **damagingEntity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that made a hit/melee attack.

#### World Ready

This property can't be read in early-execution mode.

***

### hitEntity

> `readonly` **hitEntity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that was hit by the attack.

#### World Ready

This property can't be read in early-execution mode.

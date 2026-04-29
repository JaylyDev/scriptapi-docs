[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ProjectileHitBlockAfterEvent

# Class: ProjectileHitBlockAfterEvent

Contains information related to a projectile hitting a
block.

## Source

```ts
export class ProjectileHitBlockAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    getBlockHit(): BlockHitInformation;
}
```

## Constructors

### Constructor

> `private` **new ProjectileHitBlockAfterEvent**(): `ProjectileHitBlockAfterEvent`

#### Returns

`ProjectileHitBlockAfterEvent`

## Properties

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Dimension where this projectile hit took place.

#### World Ready

This property can't be read in early-execution mode.

***

### hitVector

> `readonly` **hitVector**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Direction vector of the projectile as it hit a block.

#### World Ready

This property can't be read in early-execution mode.

***

### location

> `readonly` **location**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Location where the projectile hit occurred.

#### World Ready

This property can't be read in early-execution mode.

***

### projectile

> `readonly` **projectile**: [`Entity`](Entity-1.md)

#### Remarks

Entity for the projectile that hit a block.

#### World Ready

This property can't be read in early-execution mode.

***

### source?

> `readonly` `optional` **source?**: [`Entity`](Entity-1.md)

#### Remarks

Optional source entity that fired the projectile.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getBlockHit()

> **getBlockHit**(): [`BlockHitInformation`](../interfaces/BlockHitInformation-1.md)

#### Returns

[`BlockHitInformation`](../interfaces/BlockHitInformation-1.md)

#### Remarks

Contains additional information about the block that was hit
by the projectile.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

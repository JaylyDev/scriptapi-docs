[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityHitEntityAfterEvent

# Class: EntityHitEntityAfterEvent

Contains information related to an entity hitting (melee
attacking) another entity.

## Constructors

### Constructor

> `private` **new EntityHitEntityAfterEvent**(): `EntityHitEntityAfterEvent`

#### Returns

`EntityHitEntityAfterEvent`

## Properties

### damagingEntity

> `readonly` **damagingEntity**: [`Entity`](Entity.md)

#### Remarks

Entity that made a hit/melee attack.

#### World Ready

This property can't be read in early-execution mode.

***

### hitEntity

> `readonly` **hitEntity**: [`Entity`](Entity.md)

#### Remarks

Entity that was hit by the attack.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHurtBeforeEvent

# Class: EntityHurtBeforeEvent

**`Beta`**

Contains information related to an entity that will be hurt.

## Constructors

### Constructor

> `private` **new EntityHurtBeforeEvent**(): `EntityHurtBeforeEvent`

#### Returns

`EntityHurtBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

***

### damage

> **damage**: `number`

#### Remarks

Describes the amount of damage that will be caused.

#### World Ready

This property can't be read in early-execution mode.

***

### damageSource

> `readonly` **damageSource**: [`EntityDamageSource`](../interfaces/EntityDamageSource-1.md)

#### Remarks

Source information on the entity that may have applied this
damage.

#### World Ready

This property can't be read in early-execution mode.

***

### hurtEntity

> `readonly` **hurtEntity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that will be hurt.

#### World Ready

This property can't be read in early-execution mode.

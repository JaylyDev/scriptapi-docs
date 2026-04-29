[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityHurtAfterEvent

# Class: EntityHurtAfterEvent

Contains information related to an entity getting hurt.

## Constructors

### Constructor

> `private` **new EntityHurtAfterEvent**(): `EntityHurtAfterEvent`

#### Returns

`EntityHurtAfterEvent`

## Properties

### damage

> `readonly` **damage**: `number`

#### Remarks

Describes the amount of damage caused.

#### World Ready

This property can't be read in early-execution mode.

***

### damageSource

> `readonly` **damageSource**: [`EntityDamageSource`](../interfaces/EntityDamageSource.md)

#### Remarks

Source information on the entity that may have applied this
damage.

#### World Ready

This property can't be read in early-execution mode.

***

### hurtEntity

> `readonly` **hurtEntity**: [`Entity`](Entity.md)

#### Remarks

Entity that was hurt.

#### World Ready

This property can't be read in early-execution mode.

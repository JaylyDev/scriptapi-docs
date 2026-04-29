[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealAfterEvent

# Class: EntityHealAfterEvent

**`Beta`**

Contains information related to an entity having been
healed.

## Constructors

### Constructor

> `private` **new EntityHealAfterEvent**(): `EntityHealAfterEvent`

#### Returns

`EntityHealAfterEvent`

## Properties

### healedEntity

> `readonly` **healedEntity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that was healed.

#### World Ready

This property can't be read in early-execution mode.

***

### healing

> `readonly` **healing**: `number`

#### Remarks

Describes the amount of healing.

#### World Ready

This property can't be read in early-execution mode.

***

### healSource

> `readonly` **healSource**: [`EntityHealSource`](EntityHealSource.md)

#### Remarks

Information on the source of healing.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealBeforeEvent

# Class: EntityHealBeforeEvent

**`Beta`**

Contains information related to an entity that will be
healed.

## Constructors

### Constructor

> `private` **new EntityHealBeforeEvent**(): `EntityHealBeforeEvent`

#### Returns

`EntityHealBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

***

### healedEntity

> `readonly` **healedEntity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that will be healed.

#### World Ready

This property can't be read in early-execution mode.

***

### healing

> **healing**: `number`

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

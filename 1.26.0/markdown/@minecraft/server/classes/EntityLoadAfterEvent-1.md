[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityLoadAfterEvent

# Class: EntityLoadAfterEvent

Contains data related to an entity loaded within the world.
This could happen when an unloaded chunk is reloaded, or
when an entity changes dimensions.

## Constructors

### Constructor

> `private` **new EntityLoadAfterEvent**(): `EntityLoadAfterEvent`

#### Returns

`EntityLoadAfterEvent`

## Properties

### entity

> **entity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that was loaded.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

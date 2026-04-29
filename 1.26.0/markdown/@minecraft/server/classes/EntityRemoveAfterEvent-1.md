[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityRemoveAfterEvent

# Class: EntityRemoveAfterEvent

Data for an event that happens when an entity is removed
from the world (for example, the entity is unloaded because
it is not close to players.)

## Constructors

### Constructor

> `private` **new EntityRemoveAfterEvent**(): `EntityRemoveAfterEvent`

#### Returns

`EntityRemoveAfterEvent`

## Properties

### removedEntityId

> `readonly` **removedEntityId**: `string`

#### Remarks

Id of the entity that was removed.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the type of the entity removed - for example,
'minecraft:skeleton'.

#### World Ready

This property can't be read in early-execution mode.

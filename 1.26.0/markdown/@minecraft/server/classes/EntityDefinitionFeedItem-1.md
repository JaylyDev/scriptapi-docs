[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityDefinitionFeedItem

# Class: EntityDefinitionFeedItem

As part of the Ageable component, represents a set of items
that can be fed to an entity and the rate at which that
causes them to grow.

## Constructors

### Constructor

> `private` **new EntityDefinitionFeedItem**(): `EntityDefinitionFeedItem`

#### Returns

`EntityDefinitionFeedItem`

## Properties

### growth

> `readonly` **growth**: `number`

#### Remarks

The amount by which an entity's age will increase when fed
this item. Values usually range between 0 and 1.

#### World Ready

This property can't be read in early-execution mode.

***

### item

> `readonly` **item**: `string`

#### Remarks

Identifier of type of item that can be fed. If a namespace
is not specified, 'minecraft:' is assumed. Example values
include 'wheat' or 'golden_apple'.

#### World Ready

This property can't be read in early-execution mode.

***

### resultItem

> `readonly` **resultItem**: `string`

**`Beta`**

#### World Ready

This property can't be read in early-execution mode.

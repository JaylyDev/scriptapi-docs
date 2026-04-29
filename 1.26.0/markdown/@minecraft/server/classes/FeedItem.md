[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / FeedItem

# Class: FeedItem

As part of the Healable component, represents a specific
item that can be fed to an entity to cause health effects.

## Constructors

### Constructor

> `private` **new FeedItem**(): `FeedItem`

#### Returns

`FeedItem`

## Properties

### healAmount

> `readonly` **healAmount**: `number`

#### Remarks

The amount of health this entity gains when fed this item.
This number is an integer starting at 0. Sample values can
go as high as 40.

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

## Methods

### getEffects()

> **getEffects**(): [`FeedItemEffect`](FeedItemEffect.md)[]

#### Returns

[`FeedItemEffect`](FeedItemEffect.md)[]

#### Remarks

As part of the Healable component, an optional collection of
side effects that can occur from being fed an item.

#### World Ready

This function can't be called in early-execution mode.

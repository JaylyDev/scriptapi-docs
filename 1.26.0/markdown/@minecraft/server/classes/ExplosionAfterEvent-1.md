[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ExplosionAfterEvent

# Class: ExplosionAfterEvent

Contains information regarding an explosion that has
happened.

## Extended by

- [`ExplosionBeforeEvent`](ExplosionBeforeEvent-1.md)

## Constructors

### Constructor

> `private` **new ExplosionAfterEvent**(): `ExplosionAfterEvent`

#### Returns

`ExplosionAfterEvent`

## Properties

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Dimension where the explosion has occurred.

#### World Ready

This property can't be read in early-execution mode.

***

### source?

> `readonly` `optional` **source?**: [`Entity`](Entity-1.md)

#### Remarks

Optional source of the explosion.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getImpactedBlocks()

> **getImpactedBlocks**(): [`Block`](Block-1.md)[]

#### Returns

[`Block`](Block-1.md)[]

#### Remarks

A collection of blocks impacted by this explosion event.

#### World Ready

This function can't be called in early-execution mode.

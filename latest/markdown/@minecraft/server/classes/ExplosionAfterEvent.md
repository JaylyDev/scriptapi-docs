[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ExplosionAfterEvent

# Class: ExplosionAfterEvent

Contains information regarding an explosion that has
happened.

## Source

```ts
export class ExplosionAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly source?: Entity;
    getImpactedBlocks(): Block[];
}
```

## Extended by

- [`ExplosionBeforeEvent`](ExplosionBeforeEvent.md)

## Constructors

### Constructor

> `private` **new ExplosionAfterEvent**(): `ExplosionAfterEvent`

#### Returns

`ExplosionAfterEvent`

## Properties

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension.md)

#### Remarks

Dimension where the explosion has occurred.

#### World Ready

This property can't be read in early-execution mode.

***

### source?

> `readonly` `optional` **source?**: [`Entity`](Entity.md)

#### Remarks

Optional source of the explosion.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getImpactedBlocks()

> **getImpactedBlocks**(): [`Block`](Block.md)[]

#### Returns

[`Block`](Block.md)[]

#### Remarks

A collection of blocks impacted by this explosion event.

#### World Ready

This function can't be called in early-execution mode.

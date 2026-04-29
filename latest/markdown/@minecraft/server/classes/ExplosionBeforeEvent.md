[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ExplosionBeforeEvent

# Class: ExplosionBeforeEvent

Contains information regarding an explosion that has
happened.

## Source

```ts
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    cancel: boolean;
    setImpactedBlocks(blocks: Block[]): void;
}
```

## Extends

- [`ExplosionAfterEvent`](ExplosionAfterEvent.md)

## Constructors

### Constructor

> `private` **new ExplosionBeforeEvent**(): `ExplosionBeforeEvent`

#### Returns

`ExplosionBeforeEvent`

#### Overrides

[`ExplosionAfterEvent`](ExplosionAfterEvent.md).[`constructor`](ExplosionAfterEvent.md#constructor)

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, cancels the explosion event.

#### World Ready

This property can't be read in early-execution mode.

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension.md)

#### Remarks

Dimension where the explosion has occurred.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ExplosionAfterEvent`](ExplosionAfterEvent.md).[`dimension`](ExplosionAfterEvent.md#dimension)

***

### source?

> `readonly` `optional` **source?**: [`Entity`](Entity.md)

#### Remarks

Optional source of the explosion.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ExplosionAfterEvent`](ExplosionAfterEvent.md).[`source`](ExplosionAfterEvent.md#source)

## Methods

### getImpactedBlocks()

> **getImpactedBlocks**(): [`Block`](Block.md)[]

#### Returns

[`Block`](Block.md)[]

#### Remarks

A collection of blocks impacted by this explosion event.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`ExplosionAfterEvent`](ExplosionAfterEvent.md).[`getImpactedBlocks`](ExplosionAfterEvent.md#getimpactedblocks)

***

### setImpactedBlocks()

> **setImpactedBlocks**(`blocks`): `void`

#### Parameters

##### blocks

[`Block`](Block.md)[]

New list of blocks that are impacted by this explosion.

#### Returns

`void`

#### Remarks

Updates a collection of blocks impacted by this explosion
event.

#### World Ready

This function can't be called in early-execution mode.

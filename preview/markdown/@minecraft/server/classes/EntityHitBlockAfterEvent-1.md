[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHitBlockAfterEvent

# Class: EntityHitBlockAfterEvent

Contains information related to an entity hitting a block.

## Source

```ts
export class EntityHitBlockAfterEvent {
    private constructor();
    readonly blockFace: Direction;
    readonly damagingEntity: Entity;
    readonly hitBlock: Block;
    readonly hitBlockPermutation: BlockPermutation;
}
```

## Constructors

### Constructor

> `private` **new EntityHitBlockAfterEvent**(): `EntityHitBlockAfterEvent`

#### Returns

`EntityHitBlockAfterEvent`

## Properties

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction-1.md)

#### Remarks

Face of the block that was hit.

#### World Ready

This property can't be read in early-execution mode.

***

### damagingEntity

> `readonly` **damagingEntity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that made the attack.

#### World Ready

This property can't be read in early-execution mode.

***

### hitBlock

> `readonly` **hitBlock**: [`Block`](Block-1.md)

#### Remarks

Block that was hit by the attack.

#### World Ready

This property can't be read in early-execution mode.

***

### hitBlockPermutation

> `readonly` **hitBlockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

Block permutation that was hit by the attack.

#### World Ready

This property can't be read in early-execution mode.

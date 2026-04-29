[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemComponentUseOnEvent

# Class: ItemComponentUseOnEvent

Contains information regarding the use of an item on a block
via a component.

## Source

```ts
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    readonly source: Entity;
    readonly usedOnBlockPermutation: BlockPermutation;
}
```

## Extends

- [`ItemUseOnEvent`](ItemUseOnEvent.md)

## Constructors

### Constructor

> `private` **new ItemComponentUseOnEvent**(): `ItemComponentUseOnEvent`

#### Returns

`ItemComponentUseOnEvent`

#### Overrides

[`ItemUseOnEvent`](ItemUseOnEvent.md).[`constructor`](ItemUseOnEvent.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

The block impacted by this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent.md).[`block`](ItemUseOnEvent.md#block)

***

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction.md)

#### Remarks

The face of the block that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent.md).[`blockFace`](ItemUseOnEvent.md#blockface)

***

### faceLocation

> `readonly` **faceLocation**: [`Vector3`](../interfaces/Vector3.md)

#### Remarks

Location relative to the bottom north-west corner of the
block that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent.md).[`faceLocation`](ItemUseOnEvent.md#facelocation)

***

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack used on the block.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent.md).[`itemStack`](ItemUseOnEvent.md#itemstack)

***

### source

> `readonly` **source**: [`Entity`](Entity.md)

#### Remarks

The entity that used the item on the block.

#### World Ready

This property can't be read in early-execution mode.

***

### usedOnBlockPermutation

> `readonly` **usedOnBlockPermutation**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

The block permutation that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

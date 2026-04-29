[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentUseOnEvent

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

- [`ItemUseOnEvent`](ItemUseOnEvent-1.md)

## Constructors

### Constructor

> `private` **new ItemComponentUseOnEvent**(): `ItemComponentUseOnEvent`

#### Returns

`ItemComponentUseOnEvent`

#### Overrides

[`ItemUseOnEvent`](ItemUseOnEvent-1.md).[`constructor`](ItemUseOnEvent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

The block impacted by this event.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent-1.md).[`block`](ItemUseOnEvent-1.md#block)

***

### blockFace

> `readonly` **blockFace**: [`Direction`](../enumerations/Direction-1.md)

#### Remarks

The face of the block that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent-1.md).[`blockFace`](ItemUseOnEvent-1.md#blockface)

***

### faceLocation

> `readonly` **faceLocation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Location relative to the bottom north-west corner of the
block that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent-1.md).[`faceLocation`](ItemUseOnEvent-1.md#facelocation)

***

### itemStack

> `readonly` **itemStack**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack used on the block.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemUseOnEvent`](ItemUseOnEvent-1.md).[`itemStack`](ItemUseOnEvent-1.md#itemstack)

***

### source

> `readonly` **source**: [`Entity`](Entity-1.md)

#### Remarks

The entity that used the item on the block.

#### World Ready

This property can't be read in early-execution mode.

***

### usedOnBlockPermutation

> `readonly` **usedOnBlockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

The block permutation that the item was used on.

#### World Ready

This property can't be read in early-execution mode.

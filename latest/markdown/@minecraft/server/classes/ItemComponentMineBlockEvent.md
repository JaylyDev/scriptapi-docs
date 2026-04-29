[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemComponentMineBlockEvent

# Class: ItemComponentMineBlockEvent

Contains information regarding the mining of a block using
an item.

## Source

```ts
export class ItemComponentMineBlockEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly minedBlockPermutation: BlockPermutation;
    readonly source: Entity;
}
```

## Constructors

### Constructor

> `private` **new ItemComponentMineBlockEvent**(): `ItemComponentMineBlockEvent`

#### Returns

`ItemComponentMineBlockEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

The block impacted by this event.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack used to mine the block.

#### World Ready

This property can't be read in early-execution mode.

***

### minedBlockPermutation

> `readonly` **minedBlockPermutation**: [`BlockPermutation`](BlockPermutation.md)

#### Remarks

The block permutation that was mined.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Entity`](Entity.md)

#### Remarks

The entity that mined the block.

#### World Ready

This property can't be read in early-execution mode.

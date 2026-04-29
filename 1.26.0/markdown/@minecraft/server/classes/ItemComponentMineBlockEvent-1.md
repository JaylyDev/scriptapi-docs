[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentMineBlockEvent

# Class: ItemComponentMineBlockEvent

Contains information regarding the mining of a block using
an item.

## Constructors

### Constructor

> `private` **new ItemComponentMineBlockEvent**(): `ItemComponentMineBlockEvent`

#### Returns

`ItemComponentMineBlockEvent`

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

The block impacted by this event.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack used to mine the block.

#### World Ready

This property can't be read in early-execution mode.

***

### minedBlockPermutation

> `readonly` **minedBlockPermutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

The block permutation that was mined.

#### World Ready

This property can't be read in early-execution mode.

***

### source

> `readonly` **source**: [`Entity`](Entity-1.md)

#### Remarks

The entity that mined the block.

#### World Ready

This property can't be read in early-execution mode.

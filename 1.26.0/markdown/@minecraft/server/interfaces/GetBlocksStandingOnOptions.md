[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / GetBlocksStandingOnOptions

# Interface: GetBlocksStandingOnOptions

Contains additional options for getBlockStandingOn and
getAllBlocksStandingOn.

## Properties

### blockFilter?

> `optional` **blockFilter?**: [`BlockFilter`](BlockFilter.md)

#### Remarks

When specified, the function will include / exclude what
block(s) are returned based on the block filter.

***

### ignoreThinBlocks?

> `optional` **ignoreThinBlocks?**: `boolean`

#### Remarks

If true, all blocks of height 0.2 or lower like trapdoors
and carpets will be ignored, and the block underneath will
be returned.

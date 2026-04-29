[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockFillOptions

# Interface: BlockFillOptions

Contains additional options for a block fill operation.

## Properties

### blockFilter?

> `optional` **blockFilter?**: [`BlockFilter`](BlockFilter-1.md)

#### Remarks

When specified, the fill operation will include / exclude
the blocks added to the block filter.

***

### ignoreChunkBoundErrors?

> `optional` **ignoreChunkBoundErrors?**: `boolean`

#### Remarks

When true fillBlocks will not error if part of the fill
volume is outside of loaded chunks bounds. Instead it will
just fill the blocks that are inside the loaded chunk bounds
and ignoring blocks outside.

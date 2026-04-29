[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / GetBlocksStandingOnOptions

# Interface: GetBlocksStandingOnOptions

Contains additional options for getBlockStandingOn and
getAllBlocksStandingOn.

## Source

```ts
export interface GetBlocksStandingOnOptions {
    blockFilter?: BlockFilter;
    ignoreThinBlocks?: boolean;
}
```

## Properties

### blockFilter?

> `optional` **blockFilter?**: [`BlockFilter`](BlockFilter-1.md)

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

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockFilter

# Interface: BlockFilter

Options to include or exclude blocks based on type, tag or
permutation. If no include options are added it will select
all blocks that are not rejected by the exclude options. If
at least one include option is added the block must match
one of the include options to not be rejected.

## Source

```ts
export interface BlockFilter {
    excludePermutations?: BlockPermutation[];
    excludeTags?: string[];
    excludeTypes?: string[];
    includePermutations?: BlockPermutation[];
    includeTags?: string[];
    includeTypes?: string[];
}
```

## Extended by

- [`BlockRaycastOptions`](BlockRaycastOptions-1.md)

## Properties

### excludePermutations?

> `optional` **excludePermutations?**: [`BlockPermutation`](../classes/BlockPermutation-1.md)[]

#### Remarks

Array of block permutations that the filter should reject if
any matches.

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

Array of block tags that the filter should reject if any
matches.

***

### excludeTypes?

> `optional` **excludeTypes?**: `string`[]

#### Remarks

Array of block types that the filter should reject if any
matches.

***

### includePermutations?

> `optional` **includePermutations?**: [`BlockPermutation`](../classes/BlockPermutation-1.md)[]

#### Remarks

Array of block permutations that the filter should select if
at least one matches.

***

### includeTags?

> `optional` **includeTags?**: `string`[]

#### Remarks

Array of block tags that the filter should select if at
least one matches.

***

### includeTypes?

> `optional` **includeTypes?**: `string`[]

#### Remarks

Array of block types that the filter should select if at
least one matches.

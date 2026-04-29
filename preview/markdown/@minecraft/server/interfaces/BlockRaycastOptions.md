[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockRaycastOptions

# Interface: BlockRaycastOptions

Contains additional options for configuring a block raycast
query.

## Source

```ts
export interface BlockRaycastOptions extends BlockFilter {
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}
```

## Extends

- [`BlockFilter`](BlockFilter.md)

## Properties

### excludePermutations?

> `optional` **excludePermutations?**: [`BlockPermutation`](../classes/BlockPermutation.md)[]

#### Remarks

Array of block permutations that the filter should reject if
any matches.

#### Inherited from

[`BlockFilter`](BlockFilter.md).[`excludePermutations`](BlockFilter.md#excludepermutations)

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

Array of block tags that the filter should reject if any
matches.

#### Inherited from

[`BlockFilter`](BlockFilter.md).[`excludeTags`](BlockFilter.md#excludetags)

***

### excludeTypes?

> `optional` **excludeTypes?**: `string`[]

#### Remarks

Array of block types that the filter should reject if any
matches.

#### Inherited from

[`BlockFilter`](BlockFilter.md).[`excludeTypes`](BlockFilter.md#excludetypes)

***

### includeLiquidBlocks?

> `optional` **includeLiquidBlocks?**: `boolean`

#### Remarks

If true, liquid blocks will be considered as blocks that
'stop' the raycast.

***

### includePassableBlocks?

> `optional` **includePassableBlocks?**: `boolean`

#### Remarks

If true, passable blocks like vines and flowers will be
considered as blocks that 'stop' the raycast.

***

### includePermutations?

> `optional` **includePermutations?**: [`BlockPermutation`](../classes/BlockPermutation.md)[]

#### Remarks

Array of block permutations that the filter should select if
at least one matches.

#### Inherited from

[`BlockFilter`](BlockFilter.md).[`includePermutations`](BlockFilter.md#includepermutations)

***

### includeTags?

> `optional` **includeTags?**: `string`[]

#### Remarks

Array of block tags that the filter should select if at
least one matches.

#### Inherited from

[`BlockFilter`](BlockFilter.md).[`includeTags`](BlockFilter.md#includetags)

***

### includeTypes?

> `optional` **includeTypes?**: `string`[]

#### Remarks

Array of block types that the filter should select if at
least one matches.

#### Inherited from

[`BlockFilter`](BlockFilter.md).[`includeTypes`](BlockFilter.md#includetypes)

***

### maxDistance?

> `optional` **maxDistance?**: `number`

#### Remarks

Maximum distance, in blocks, to process the raycast.

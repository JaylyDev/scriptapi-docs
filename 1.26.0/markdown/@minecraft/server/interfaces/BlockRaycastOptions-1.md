[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockRaycastOptions

# Interface: BlockRaycastOptions

Contains additional options for configuring a block raycast
query.

## Extends

- [`BlockFilter`](BlockFilter-1.md)

## Properties

### excludePermutations?

> `optional` **excludePermutations?**: [`BlockPermutation`](../classes/BlockPermutation-1.md)[]

#### Remarks

Array of block permutations that the filter should reject if
any matches.

#### Inherited from

[`BlockFilter`](BlockFilter-1.md).[`excludePermutations`](BlockFilter-1.md#excludepermutations)

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

Array of block tags that the filter should reject if any
matches.

#### Inherited from

[`BlockFilter`](BlockFilter-1.md).[`excludeTags`](BlockFilter-1.md#excludetags)

***

### excludeTypes?

> `optional` **excludeTypes?**: `string`[]

#### Remarks

Array of block types that the filter should reject if any
matches.

#### Inherited from

[`BlockFilter`](BlockFilter-1.md).[`excludeTypes`](BlockFilter-1.md#excludetypes)

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

> `optional` **includePermutations?**: [`BlockPermutation`](../classes/BlockPermutation-1.md)[]

#### Remarks

Array of block permutations that the filter should select if
at least one matches.

#### Inherited from

[`BlockFilter`](BlockFilter-1.md).[`includePermutations`](BlockFilter-1.md#includepermutations)

***

### includeTags?

> `optional` **includeTags?**: `string`[]

#### Remarks

Array of block tags that the filter should select if at
least one matches.

#### Inherited from

[`BlockFilter`](BlockFilter-1.md).[`includeTags`](BlockFilter-1.md#includetags)

***

### includeTypes?

> `optional` **includeTypes?**: `string`[]

#### Remarks

Array of block types that the filter should select if at
least one matches.

#### Inherited from

[`BlockFilter`](BlockFilter-1.md).[`includeTypes`](BlockFilter-1.md#includetypes)

***

### maxDistance?

> `optional` **maxDistance?**: `number`

#### Remarks

Maximum distance, in blocks, to process the raycast.

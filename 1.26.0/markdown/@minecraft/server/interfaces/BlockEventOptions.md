[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / BlockEventOptions

# Interface: BlockEventOptions

Contains optional parameters for registering a block event.

## Properties

### blockTypes?

> `optional` **blockTypes?**: `string`[]

#### Remarks

If this value is set, this event will only fire if the
impacted block's type matches this parameter.

***

### permutations?

> `optional` **permutations?**: [`BlockPermutation`](../classes/BlockPermutation.md)[]

#### Remarks

If this value is set, this event will only fire if the
impacted block's permutation matches this parameter.

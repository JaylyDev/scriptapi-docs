[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockEventOptions

# Interface: BlockEventOptions

Contains optional parameters for registering a block event.

## Source

```ts
export interface BlockEventOptions {
    blockTypes?: string[];
    permutations?: BlockPermutation[];
}
```

## Properties

### blockTypes?

> `optional` **blockTypes?**: `string`[]

#### Remarks

If this value is set, this event will only fire if the
impacted block's type matches this parameter.

***

### permutations?

> `optional` **permutations?**: [`BlockPermutation`](../classes/BlockPermutation-1.md)[]

#### Remarks

If this value is set, this event will only fire if the
impacted block's permutation matches this parameter.

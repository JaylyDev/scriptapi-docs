[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockStateArg

# Type Alias: BlockStateArg\<T\>

> **BlockStateArg**\<`T`\> = `T` *extends* `` `${minecraftvanilladata.MinecraftBlockTypes}` `` ? `T` *extends* keyof `minecraftvanilladata.BlockStateMapping` ? `minecraftvanilladata.BlockStateMapping`\[`T`\] : `never` : `Record`\<`string`, `boolean` \| `number` \| `string`\>

Type alias used by the [BlockPermutation](../classes/BlockPermutation-1.md) matches and
resolve functions to narrow block state argument types to
those mapped by @minecraft/vanilla-data.BlockStateMapping.

## Type Parameters

### T

`T`

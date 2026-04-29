[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IBlockPaletteItem

# Class: IBlockPaletteItem

## Extended by

- [`ProbabilityBlockPaletteItem`](ProbabilityBlockPaletteItem.md)
- [`SimpleBlockPaletteItem`](SimpleBlockPaletteItem.md)

## Constructors

### Constructor

> `private` **new IBlockPaletteItem**(): `IBlockPaletteItem`

#### Returns

`IBlockPaletteItem`

## Methods

### getBlock()

> **getBlock**(): [`BlockType`](../../server/classes/BlockType.md) \| `undefined`

#### Returns

[`BlockType`](../../server/classes/BlockType.md) \| `undefined`

***

### getDisplayName()

> **getDisplayName**(): `string` \| `undefined`

#### Returns

`string` \| `undefined`

***

### getType()

> **getType**(): [`BlockPaletteItemType`](../enumerations/BlockPaletteItemType.md)

#### Returns

[`BlockPaletteItemType`](../enumerations/BlockPaletteItemType.md)

***

### setBlock()

> **setBlock**(`block`): `void`

#### Parameters

##### block

`string` \| [`BlockPermutation`](../../server/classes/BlockPermutation.md) \| [`BlockType`](../../server/classes/BlockType.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

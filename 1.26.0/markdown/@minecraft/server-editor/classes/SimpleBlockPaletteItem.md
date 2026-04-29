[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / SimpleBlockPaletteItem

# Class: SimpleBlockPaletteItem

## Extends

- [`IBlockPaletteItem`](IBlockPaletteItem.md)

## Constructors

### Constructor

> **new SimpleBlockPaletteItem**(`displayName?`): `SimpleBlockPaletteItem`

#### Parameters

##### displayName?

`string`

#### Returns

`SimpleBlockPaletteItem`

#### Overrides

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`constructor`](IBlockPaletteItem.md#constructor)

## Methods

### getBlock()

> **getBlock**(): [`BlockType`](../../server/classes/BlockType.md) \| `undefined`

#### Returns

[`BlockType`](../../server/classes/BlockType.md) \| `undefined`

#### Inherited from

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`getBlock`](IBlockPaletteItem.md#getblock)

***

### getDisplayName()

> **getDisplayName**(): `string` \| `undefined`

#### Returns

`string` \| `undefined`

#### Inherited from

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`getDisplayName`](IBlockPaletteItem.md#getdisplayname)

***

### getType()

> **getType**(): [`BlockPaletteItemType`](../enumerations/BlockPaletteItemType.md)

#### Returns

[`BlockPaletteItemType`](../enumerations/BlockPaletteItemType.md)

#### Inherited from

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`getType`](IBlockPaletteItem.md#gettype)

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

#### Inherited from

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`setBlock`](IBlockPaletteItem.md#setblock)

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ProbabilityBlockPaletteItem

# Class: ProbabilityBlockPaletteItem

## Extends

- [`IBlockPaletteItem`](IBlockPaletteItem.md)

## Constructors

### Constructor

> **new ProbabilityBlockPaletteItem**(`displayName?`): `ProbabilityBlockPaletteItem`

#### Parameters

##### displayName?

`string`

#### Returns

`ProbabilityBlockPaletteItem`

#### Overrides

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`constructor`](IBlockPaletteItem.md#constructor)

## Methods

### addBlock()

> **addBlock**(`block`, `weight`): `void`

#### Parameters

##### block

`string` \| [`BlockPermutation`](../../server/classes/BlockPermutation.md) \| [`BlockType`](../../server/classes/BlockType.md)

##### weight

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlock()

> **getBlock**(): [`BlockType`](../../server/classes/BlockType.md) \| `undefined`

#### Returns

[`BlockType`](../../server/classes/BlockType.md) \| `undefined`

#### Inherited from

[`IBlockPaletteItem`](IBlockPaletteItem.md).[`getBlock`](IBlockPaletteItem.md#getblock)

***

### getBlocks()

> **getBlocks**(): [`WeightedBlock`](../interfaces/WeightedBlock.md)[]

#### Returns

[`WeightedBlock`](../interfaces/WeightedBlock.md)[]

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

### removeBlockAt()

> **removeBlockAt**(`index`): `void`

#### Parameters

##### index

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

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

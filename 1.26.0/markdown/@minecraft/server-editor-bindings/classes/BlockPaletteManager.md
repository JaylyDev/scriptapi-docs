[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / BlockPaletteManager

# Class: BlockPaletteManager

## Constructors

### Constructor

> `private` **new BlockPaletteManager**(): `BlockPaletteManager`

#### Returns

`BlockPaletteManager`

## Methods

### addOrReplacePalette()

> **addOrReplacePalette**(`paletteId`, `palette`): `void`

#### Parameters

##### paletteId

`string`

##### palette

[`BlockPalette`](BlockPalette.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getPalette()

> **getPalette**(`paletteId`): [`BlockPalette`](BlockPalette.md) \| `undefined`

#### Parameters

##### paletteId

`string`

#### Returns

[`BlockPalette`](BlockPalette.md) \| `undefined`

***

### getPaletteIdList()

> **getPaletteIdList**(): `string`[]

#### Returns

`string`[]

***

### getPaletteItem()

> **getPaletteItem**(`paletteId`, `index`): [`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Parameters

##### paletteId

`string`

##### index

`number`

#### Returns

[`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getPrimaryPalette()

> **getPrimaryPalette**(): [`BlockPalette`](BlockPalette.md)

#### Returns

[`BlockPalette`](BlockPalette.md)

***

### getSelectedBlockType()

> **getSelectedBlockType**(): [`BlockType`](../../server/classes/BlockType.md)

#### Returns

[`BlockType`](../../server/classes/BlockType.md)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getSelectedItem()

> **getSelectedItem**(): [`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Returns

[`IBlockPaletteItem`](IBlockPaletteItem.md)

***

### removePalette()

> **removePalette**(`paletteId`): `void`

#### Parameters

##### paletteId

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setPaletteItem()

> **setPaletteItem**(`paletteId`, `index`, `item`): `void`

#### Parameters

##### paletteId

`string`

##### index

`number`

##### item

[`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setPrimaryPalette()

> **setPrimaryPalette**(`paletteId`): `void`

#### Parameters

##### paletteId

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setSelectedItem()

> **setSelectedItem**(`item`): `void`

#### Parameters

##### item

[`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

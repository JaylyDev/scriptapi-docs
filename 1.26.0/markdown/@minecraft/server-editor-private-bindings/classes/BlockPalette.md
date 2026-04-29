[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / BlockPalette

# Class: BlockPalette

## Constructors

### Constructor

> **new BlockPalette**(): `BlockPalette`

#### Returns

`BlockPalette`

## Methods

### getItem()

> **getItem**(`index`): [`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Parameters

##### index

`number`

#### Returns

[`IBlockPaletteItem`](IBlockPaletteItem.md)

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeItemAt()

> **removeItemAt**(`index`): `void`

#### Parameters

##### index

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeItems()

> **removeItems**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setItem()

> **setItem**(`blockPaletteItem`, `index`): `void`

#### Parameters

##### blockPaletteItem

[`IBlockPaletteItem`](IBlockPaletteItem.md)

##### index

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

#### World Ready

This function can't be called in early-execution mode.

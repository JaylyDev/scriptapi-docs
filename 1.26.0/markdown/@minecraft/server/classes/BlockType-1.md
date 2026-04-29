[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockType

# Class: BlockType

The type (or template) of a block. Does not contain
permutation data (state) other than the type of block it
represents. This type was introduced as of version
1.17.10.21.

## Constructors

### Constructor

> `private` **new BlockType**(): `BlockType`

#### Returns

`BlockType`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Block type name - for example, `minecraft:acacia_stairs`.

#### World Ready

This property can't be read in early-execution mode.

***

### localizationKey

> `readonly` **localizationKey**: `string`

**`Beta`**

#### Remarks

Key for the localization of this BlockType's name used in
.lang files.

#### World Ready

This property can't be read in early-execution mode.

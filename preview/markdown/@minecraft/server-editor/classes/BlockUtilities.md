[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / BlockUtilities

# Class: BlockUtilities

## Constructors

### Constructor

> `private` **new BlockUtilities**(): `BlockUtilities`

#### Returns

`BlockUtilities`

## Methods

### fillVolume()

> **fillVolume**(`volume`, `block?`): `void`

#### Parameters

##### volume

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`CompoundBlockVolume`](../../server/classes/CompoundBlockVolume.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

##### block?

`string` \| [`BlockPermutation`](../../server/classes/BlockPermutation.md) \| [`BlockType`](../../server/classes/BlockType.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### findObscuredBlocksWithinVolume()

> **findObscuredBlocksWithinVolume**(`volume`): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Parameters

##### volume

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getContiguousSelection()

> **getContiguousSelection**(`properties?`): [`CompoundBlockVolume`](../../server/classes/CompoundBlockVolume.md)

#### Parameters

##### properties?

[`ContiguousSelectionProperties`](../interfaces/ContiguousSelectionProperties.md)

#### Returns

[`CompoundBlockVolume`](../../server/classes/CompoundBlockVolume.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getDimensionLocationBoundingBox()

> **getDimensionLocationBoundingBox**(): [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getDimensionMaxLocation()

> **getDimensionMaxLocation**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getDimensionMinLocation()

> **getDimensionMinLocation**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getFacePreviewSelection()

> **getFacePreviewSelection**(`properties?`): [`ListBlockVolume`](../../server/classes/ListBlockVolume.md)

#### Parameters

##### properties?

[`QuickExtrudeProperties`](../interfaces/QuickExtrudeProperties.md)

#### Returns

[`ListBlockVolume`](../../server/classes/ListBlockVolume.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isLocationInsideCurrentDimensionBounds()

> **isLocationInsideCurrentDimensionBounds**(`locationOrVolumeOrBounds`): `boolean`

#### Parameters

##### locationOrVolumeOrBounds

[`Vector3`](../../server/interfaces/Vector3.md) \| [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### quickExtrude()

> **quickExtrude**(`properties?`): `void`

#### Parameters

##### properties?

[`QuickExtrudeProperties`](../interfaces/QuickExtrudeProperties.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### shrinkWrapVolume()

> **shrinkWrapVolume**(`volume`): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Parameters

##### volume

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### trimVolumeToFitContents()

> **trimVolumeToFitContents**(`volume`, `retainMarqueeAfterTrimming`, `ignoreLiquid`, `ignoreNoCollision`, `blockMask?`): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Parameters

##### volume

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

##### retainMarqueeAfterTrimming

`boolean`

##### ignoreLiquid

`boolean`

##### ignoreNoCollision

`boolean`

##### blockMask?

[`BlockMaskList`](../interfaces/BlockMaskList.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

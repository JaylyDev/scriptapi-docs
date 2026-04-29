[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / BrushShapeManager

# Class: BrushShapeManager

## Constructors

### Constructor

> `private` **new BrushShapeManager**(): `BrushShapeManager`

#### Returns

`BrushShapeManager`

## Properties

### activeBrushVolume?

> `readonly` `optional` **activeBrushVolume?**: [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

## Methods

### activateBrushTool()

> **activateBrushTool**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### beginPainting()

> **beginPainting**(`onComplete`): `void`

#### Parameters

##### onComplete

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### clearBlockStateOverrides()

> **clearBlockStateOverrides**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### deactivateBrushTool()

> **deactivateBrushTool**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### disableItemPlacement()

> **disableItemPlacement**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### enableItemPlacement()

> **enableItemPlacement**(`itemType`, `data?`): `void`

#### Parameters

##### itemType

[`ItemType`](../../server/classes/ItemType.md)

##### data?

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### endPainting()

> **endPainting**(`cancelled`): `void`

#### Parameters

##### cancelled

`boolean`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBrushShapeOffset()

> **getBrushShapeOffset**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getDirectionalPlacementMode()

> **getDirectionalPlacementMode**(): [`BrushDirectionalPlacementMode`](../enumerations/BrushDirectionalPlacementMode.md)

#### Returns

[`BrushDirectionalPlacementMode`](../enumerations/BrushDirectionalPlacementMode.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getInverseEraseMode()

> **getInverseEraseMode**(): `boolean`

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### isBrushPaintBusy()

> **isBrushPaintBusy**(): `boolean`

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### pushBlockStateOverride()

> **pushBlockStateOverride**\<`T`\>(`blockStateName`, `blockStateValue`): `void`

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### blockStateName

`T`

##### blockStateValue

`BlockStateSuperset`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockFacePlacementBasedOnCamera()

> **setBlockFacePlacementBasedOnCamera**(`enabled`): `void`

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setBrushMask()

> **setBrushMask**(`mask`): `void`

#### Parameters

##### mask

[`BlockMaskList`](../interfaces/BlockMaskList.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setBrushShape()

> **setBrushShape**(`shape`): `void`

#### Parameters

##### shape

[`Vector3`](../../server/interfaces/Vector3.md)[] \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setBrushShapeOffset()

> **setBrushShapeOffset**(`offset`): `void`

#### Parameters

##### offset

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setBrushShapeVisible()

> **setBrushShapeVisible**(`visible`): `void`

#### Parameters

##### visible

`boolean`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setDirectionalPlacementMode()

> **setDirectionalPlacementMode**(`directionalPlacementMode`): `void`

#### Parameters

##### directionalPlacementMode

[`BrushDirectionalPlacementMode`](../enumerations/BrushDirectionalPlacementMode.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setElevationBrushRadius()

> **setElevationBrushRadius**(`elevationBrushRadius`): `void`

#### Parameters

##### elevationBrushRadius

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setElevationFalloff()

> **setElevationFalloff**(`elevationFalloff`): `void`

#### Parameters

##### elevationFalloff

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setElevationMode()

> **setElevationMode**(`elevationMode`): `void`

#### Parameters

##### elevationMode

[`BrushElevationMode`](../enumerations/BrushElevationMode.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setElevationSampleLayers()

> **setElevationSampleLayers**(`elevationSampleLayers`): `void`

#### Parameters

##### elevationSampleLayers

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setFlattenMode()

> **setFlattenMode**(`flattenMode`): `void`

#### Parameters

##### flattenMode

[`FlattenMode`](../enumerations/FlattenMode.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setFlattenSmoothing()

> **setFlattenSmoothing**(`flattenSmoothing`): `void`

#### Parameters

##### flattenSmoothing

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setFloorBlockOverride()

> **setFloorBlockOverride**(`floorBlockOverride`): `void`

#### Parameters

##### floorBlockOverride

`boolean`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setInverseEraseMode()

> **setInverseEraseMode**(`inverseEraseMode`): `void`

#### Parameters

##### inverseEraseMode

`boolean`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setTerrainStrength()

> **setTerrainStrength**(`terrainStrength`): `void`

#### Parameters

##### terrainStrength

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### singlePaint()

> **singlePaint**(`onComplete`): `void`

#### Parameters

##### onComplete

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### switchBrushPaintMode()

> **switchBrushPaintMode**(`paintMode`): `void`

#### Parameters

##### paintMode

[`PaintMode`](../enumerations/PaintMode.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

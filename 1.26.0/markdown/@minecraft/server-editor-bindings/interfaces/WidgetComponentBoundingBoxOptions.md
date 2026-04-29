[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / WidgetComponentBoundingBoxOptions

# Interface: WidgetComponentBoundingBoxOptions

## Extends

- [`WidgetComponentBaseOptions`](WidgetComponentBaseOptions.md)

## Properties

### boundsOffset?

> `optional` **boundsOffset?**: [`Vector3`](../../server/interfaces/Vector3.md)

***

### enableResizeHandles?

> `optional` **enableResizeHandles?**: [`Axis`](../enumerations/Axis.md)

***

### hullColor?

> `optional` **hullColor?**: [`RGBA`](../../server/interfaces/RGBA.md)

***

### limit?

> `optional` **limit?**: [`WidgetComponentBoundingBoxLimit`](WidgetComponentBoundingBoxLimit.md)

***

### lockToSurface?

> `optional` **lockToSurface?**: `boolean`

#### Inherited from

[`WidgetComponentBaseOptions`](WidgetComponentBaseOptions.md).[`lockToSurface`](WidgetComponentBaseOptions.md#locktosurface)

***

### mirror?

> `optional` **mirror?**: [`StructureMirrorAxis`](../../server/enumerations/StructureMirrorAxis.md)

***

### normalizedOrigin?

> `optional` **normalizedOrigin?**: [`Vector3`](../../server/interfaces/Vector3.md)

***

### offset?

> `optional` **offset?**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Inherited from

[`WidgetComponentBaseOptions`](WidgetComponentBaseOptions.md).[`offset`](WidgetComponentBaseOptions.md#offset)

***

### outlineColor?

> `optional` **outlineColor?**: [`RGBA`](../../server/interfaces/RGBA.md)

***

### rotation?

> `optional` **rotation?**: [`StructureRotation`](../../server/enumerations/StructureRotation.md)

***

### showWorldIntersections?

> `optional` **showWorldIntersections?**: `boolean`

***

### stateChangeEvent?

> `optional` **stateChangeEvent?**: (`arg0`) => `void`

#### Parameters

##### arg0

[`WidgetComponentBoundingBoxStateChangeEventParameters`](../classes/WidgetComponentBoundingBoxStateChangeEventParameters.md)

#### Returns

`void`

***

### visible?

> `optional` **visible?**: `boolean`

#### Inherited from

[`WidgetComponentBaseOptions`](WidgetComponentBaseOptions.md).[`visible`](WidgetComponentBaseOptions.md#visible)

***

### visibleHull?

> `optional` **visibleHull?**: `boolean`

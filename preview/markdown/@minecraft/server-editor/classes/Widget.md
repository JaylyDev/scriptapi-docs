[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / Widget

# Class: Widget

## Constructors

### Constructor

> `private` **new Widget**(): `Widget`

#### Returns

`Widget`

## Properties

### bindPositionToBlockCursor

> **bindPositionToBlockCursor**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### collisionOffset

> **collisionOffset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### collisionRadius

> **collisionRadius**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### collisionType

> **collisionType**: [`WidgetCollisionType`](../enumerations/WidgetCollisionType.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### dimensionId?

> `optional` **dimensionId?**: `string`

***

### group

> `readonly` **group**: [`WidgetGroup`](WidgetGroup.md)

#### Throws

This property can throw when used.

[InvalidWidgetError](InvalidWidgetError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### ignoreEditorModeVisibilityOverride

> **ignoreEditorModeVisibilityOverride**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### location

> **location**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### lockPositionToSurface

> **lockPositionToSurface**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### selectable

> `readonly` **selectable**: `boolean`

#### Throws

This property can throw when used.

[InvalidWidgetError](InvalidWidgetError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### selected

> **selected**: `boolean`

***

### showBoundingBox

> **showBoundingBox**: `boolean`

***

### showCollisionRadius

> **showCollisionRadius**: `boolean`

***

### snapToBlockLocation

> **snapToBlockLocation**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### visible

> **visible**: `boolean`

***

### widgetName

> `readonly` **widgetName**: `string`

## Methods

### addBoundingBox()

> **addBoundingBox**(`componentName`, `size`, `options?`): [`WidgetComponentBoundingBox`](WidgetComponentBoundingBox.md)

#### Parameters

##### componentName

`string`

##### size

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`WidgetComponentBoundingBoxOptions`](../interfaces/WidgetComponentBoundingBoxOptions.md)

#### Returns

[`WidgetComponentBoundingBox`](WidgetComponentBoundingBox.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addClipboardComponent()

> **addClipboardComponent**(`componentName`, `clipboardItem?`, `options?`): [`WidgetComponentClipboard`](WidgetComponentClipboard.md)

#### Parameters

##### componentName

`string`

##### clipboardItem?

[`ClipboardItem`](ClipboardItem.md) \| [`EditorStructure`](EditorStructure.md)

##### options?

[`WidgetComponentClipboardOptions`](../interfaces/WidgetComponentClipboardOptions.md)

#### Returns

[`WidgetComponentClipboard`](WidgetComponentClipboard.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addEntityComponent()

> **addEntityComponent**(`componentName`, `actorNameId`, `options?`): [`WidgetComponentEntity`](WidgetComponentEntity.md)

#### Parameters

##### componentName

`string`

##### actorNameId

`string`

##### options?

[`WidgetComponentEntityOptions`](../interfaces/WidgetComponentEntityOptions.md)

#### Returns

[`WidgetComponentEntity`](WidgetComponentEntity.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addGizmoComponent()

> **addGizmoComponent**(`componentName`, `options?`): [`WidgetComponentGizmo`](WidgetComponentGizmo.md)

#### Parameters

##### componentName

`string`

##### options?

[`WidgetComponentGizmoOptions`](../interfaces/WidgetComponentGizmoOptions.md)

#### Returns

[`WidgetComponentGizmo`](WidgetComponentGizmo.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addGridComponent()

> **addGridComponent**(`componentName`, `options?`): [`WidgetComponentGrid`](WidgetComponentGrid.md)

#### Parameters

##### componentName

`string`

##### options?

[`WidgetComponentGridOptions`](../interfaces/WidgetComponentGridOptions.md)

#### Returns

[`WidgetComponentGrid`](WidgetComponentGrid.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addGuideComponent()

> **addGuideComponent**(`componentName`, `options?`): [`WidgetComponentGuide`](WidgetComponentGuide.md)

#### Parameters

##### componentName

`string`

##### options?

[`WidgetComponentGuideOptions`](../interfaces/WidgetComponentGuideOptions.md)

#### Returns

[`WidgetComponentGuide`](WidgetComponentGuide.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addRenderPrimitiveComponent()

> **addRenderPrimitiveComponent**(`componentName`, `primitiveType`, `options?`): [`WidgetComponentRenderPrimitive`](WidgetComponentRenderPrimitive.md)

#### Parameters

##### componentName

`string`

##### primitiveType

[`WidgetComponentRenderPrimitiveTypeAxialSphere`](WidgetComponentRenderPrimitiveTypeAxialSphere.md) \| [`WidgetComponentRenderPrimitiveTypeBox`](WidgetComponentRenderPrimitiveTypeBox.md) \| [`WidgetComponentRenderPrimitiveTypeCone`](WidgetComponentRenderPrimitiveTypeCone.md) \| [`WidgetComponentRenderPrimitiveTypeCuboid`](WidgetComponentRenderPrimitiveTypeCuboid.md) \| [`WidgetComponentRenderPrimitiveTypeCylinder`](WidgetComponentRenderPrimitiveTypeCylinder.md) \| [`WidgetComponentRenderPrimitiveTypeDisc`](WidgetComponentRenderPrimitiveTypeDisc.md) \| [`WidgetComponentRenderPrimitiveTypeEllipsoid`](WidgetComponentRenderPrimitiveTypeEllipsoid.md) \| [`WidgetComponentRenderPrimitiveTypeLine`](WidgetComponentRenderPrimitiveTypeLine.md) \| [`WidgetComponentRenderPrimitiveTypePyramid`](WidgetComponentRenderPrimitiveTypePyramid.md)

##### options?

[`WidgetComponentRenderPrimitiveOptions`](../interfaces/WidgetComponentRenderPrimitiveOptions.md)

#### Returns

[`WidgetComponentRenderPrimitive`](WidgetComponentRenderPrimitive.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addSplineComponent()

> **addSplineComponent**(`componentName`, `options?`): [`WidgetComponentSpline`](WidgetComponentSpline.md)

#### Parameters

##### componentName

`string`

##### options?

[`WidgetComponentSplineOptions`](../interfaces/WidgetComponentSplineOptions.md)

#### Returns

[`WidgetComponentSpline`](WidgetComponentSpline.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addTextComponent()

> **addTextComponent**(`componentName`, `label`, `options?`): [`WidgetComponentText`](WidgetComponentText.md)

#### Parameters

##### componentName

`string`

##### label

`string`

##### options?

[`WidgetComponentTextOptions`](../interfaces/WidgetComponentTextOptions.md)

#### Returns

[`WidgetComponentText`](WidgetComponentText.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addVolumeOutline()

> **addVolumeOutline**(`componentName`, `volume?`, `options?`): [`WidgetComponentVolumeOutline`](WidgetComponentVolumeOutline.md)

#### Parameters

##### componentName

`string`

##### volume?

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

##### options?

[`WidgetComponentVolumeOutlineOptions`](../interfaces/WidgetComponentVolumeOutlineOptions.md)

#### Returns

[`WidgetComponentVolumeOutline`](WidgetComponentVolumeOutline.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### delete()

> **delete**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### deleteComponent()

> **deleteComponent**(`componentOrName`): `void`

#### Parameters

##### componentOrName

`string` \| [`WidgetComponentBase`](WidgetComponentBase.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getComponent()

> **getComponent**(`componentName`): [`WidgetComponentBase`](WidgetComponentBase.md)

#### Parameters

##### componentName

`string`

#### Returns

[`WidgetComponentBase`](WidgetComponentBase.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getComponents()

> **getComponents**(): [`WidgetComponentBase`](WidgetComponentBase.md)[]

#### Returns

[`WidgetComponentBase`](WidgetComponentBase.md)[]

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetError](InvalidWidgetError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setStateChangeEvent()

> **setStateChangeEvent**(`eventFunction?`): `void`

#### Parameters

##### eventFunction?

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetError](InvalidWidgetError.md)

#### World Ready

This function can't be called in early-execution mode.

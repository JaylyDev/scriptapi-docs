[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / WidgetComponentBoundingBox

# Class: WidgetComponentBoundingBox

## Extends

- [`WidgetComponentBase`](WidgetComponentBase.md)

## Constructors

### Constructor

> `private` **new WidgetComponentBoundingBox**(): `WidgetComponentBoundingBox`

#### Returns

`WidgetComponentBoundingBox`

#### Overrides

[`WidgetComponentBase`](WidgetComponentBase.md).[`constructor`](WidgetComponentBase.md#constructor)

## Properties

### boundsOffset

> **boundsOffset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### componentType

> `readonly` **componentType**: [`WidgetComponentType`](../enumerations/WidgetComponentType.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`componentType`](WidgetComponentBase.md#componenttype)

***

### enableResizeHandles

> **enableResizeHandles**: [`Axis`](../enumerations/Axis.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### hullColor

> **hullColor**: [`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### location

> `readonly` **location**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`location`](WidgetComponentBase.md#location)

***

### lockToSurface

> **lockToSurface**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`lockToSurface`](WidgetComponentBase.md#locktosurface)

***

### mirror

> **mirror**: [`StructureMirrorAxis`](../../server/enumerations/StructureMirrorAxis.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### name

> `readonly` **name**: `string`

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`name`](WidgetComponentBase.md#name)

***

### normalizedOrigin

> **normalizedOrigin**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### offset

> **offset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`offset`](WidgetComponentBase.md#offset)

***

### outlineColor

> **outlineColor**: [`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### rotation

> **rotation**: [`StructureRotation`](../../server/enumerations/StructureRotation.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showWorldIntersections

> **showWorldIntersections**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### size

> **size**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### transformedWorldVolume

> `readonly` **transformedWorldVolume**: [`BlockVolume`](../../server/classes/BlockVolume.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### valid

> `readonly` **valid**: `boolean`

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`valid`](WidgetComponentBase.md#valid)

***

### visible

> **visible**: `boolean`

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`visible`](WidgetComponentBase.md#visible)

***

### visibleHull

> **visibleHull**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### widget

> `readonly` **widget**: [`Widget`](Widget.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`widget`](WidgetComponentBase.md#widget)

## Methods

### deactivateHandles()

> **deactivateHandles**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

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

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`delete`](WidgetComponentBase.md#delete)

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

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This function can't be called in early-execution mode.

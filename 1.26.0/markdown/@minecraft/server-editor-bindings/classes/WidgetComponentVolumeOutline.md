[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / WidgetComponentVolumeOutline

# Class: WidgetComponentVolumeOutline

## Extends

- [`WidgetComponentBase`](WidgetComponentBase.md)

## Constructors

### Constructor

> `private` **new WidgetComponentVolumeOutline**(): `WidgetComponentVolumeOutline`

#### Returns

`WidgetComponentVolumeOutline`

#### Overrides

[`WidgetComponentBase`](WidgetComponentBase.md).[`constructor`](WidgetComponentBase.md#constructor)

## Properties

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

### highlightHullColor

> **highlightHullColor**: [`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### highlightOutlineColor

> **highlightOutlineColor**: [`RGBA`](../../server/interfaces/RGBA.md)

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

### showHighlightOutline

> **showHighlightOutline**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showOutline

> **showOutline**: `boolean`

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

### volumeOffset

> **volumeOffset**: [`Vector3`](../../server/interfaces/Vector3.md)

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

### getVolume()

> **getVolume**(): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md) \| `undefined`

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md) \| `undefined`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setVolume()

> **setVolume**(`volumeToSet?`): `void`

#### Parameters

##### volumeToSet?

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This function can't be called in early-execution mode.

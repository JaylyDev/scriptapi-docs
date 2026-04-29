[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / EllipsoidBrushShape

# Class: EllipsoidBrushShape

Base for creating new brush shapes

## Extends

- [`BrushShape`](BrushShape.md)

## Constructors

### Constructor

> **new EllipsoidBrushShape**(`settings?`): `EllipsoidBrushShape`

#### Parameters

##### settings?

###### depth?

`number`

###### height?

`number`

###### minRadius?

`number`

###### radius?

`number`

###### uniform?

`boolean`

###### width?

`number`

###### xRotation?

`number`

###### yRotation?

`number`

###### zRotation?

`number`

#### Returns

`EllipsoidBrushShape`

#### Remarks

Constructs a new instance of the `EllipsoidBrushShape` class

#### Overrides

[`BrushShape`](BrushShape.md).[`constructor`](BrushShape.md#constructor)

## Accessors

### displayName

#### Get Signature

> **get** **displayName**(): `string`

##### Returns

`string`

#### Inherited from

[`BrushShape`](BrushShape.md).[`displayName`](BrushShape.md#displayname)

***

### icon

#### Get Signature

> **get** **icon**(): `string`

##### Returns

`string`

#### Inherited from

[`BrushShape`](BrushShape.md).[`icon`](BrushShape.md#icon)

***

### id

#### Get Signature

> **get** **id**(): `string`

##### Returns

`string`

#### Inherited from

[`BrushShape`](BrushShape.md).[`id`](BrushShape.md#id)

## Methods

### applySetting()

> **applySetting**(`brushSettings`): `void`

#### Parameters

##### brushSettings

[`EllipsoidBrushShapeSettings`](../interfaces/EllipsoidBrushShapeSettings.md)

#### Returns

`void`

#### Overrides

[`BrushShape`](BrushShape.md).[`applySetting`](BrushShape.md#applysetting)

***

### createSettingsPane()

> **createSettingsPane**(`parentPane`, `onSettingsChange?`): [`ISubPanePropertyItem`](../interfaces/ISubPanePropertyItem.md)

#### Parameters

##### parentPane

[`IPropertyPane`](../interfaces/IPropertyPane.md)

##### onSettingsChange?

() => `void`

#### Returns

[`ISubPanePropertyItem`](../interfaces/ISubPanePropertyItem.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`createSettingsPane`](BrushShape.md#createsettingspane)

***

### createShape()

> **createShape**(): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`createShape`](BrushShape.md#createshape)

***

### getSettings()

> **getSettings**(): [`EllipsoidBrushShapeSettings`](../interfaces/EllipsoidBrushShapeSettings.md)

#### Returns

[`EllipsoidBrushShapeSettings`](../interfaces/EllipsoidBrushShapeSettings.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`getSettings`](BrushShape.md#getsettings)

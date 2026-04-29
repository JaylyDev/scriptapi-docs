[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / SingleBlockBrushShape

# Class: SingleBlockBrushShape

Responsible for querying and modifying various properties of
the simulation.

## Extends

- [`BrushShape`](BrushShape.md)

## Constructors

### Constructor

> **new SingleBlockBrushShape**(): `SingleBlockBrushShape`

#### Returns

`SingleBlockBrushShape`

#### Remarks

Constructs a new instance of the `SingleBlockBrushShape`
class

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

> **applySetting**(`_settings`): `void`

#### Parameters

##### \_settings

[`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

#### Returns

`void`

#### Overrides

[`BrushShape`](BrushShape.md).[`applySetting`](BrushShape.md#applysetting)

***

### createSettingsPane()

> **createSettingsPane**(): `undefined`

#### Returns

`undefined`

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

> **getSettings**(): [`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

#### Returns

[`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`getSettings`](BrushShape.md#getsettings)

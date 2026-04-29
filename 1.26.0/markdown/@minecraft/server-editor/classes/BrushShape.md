[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / BrushShape

# Abstract Class: BrushShape

Base for creating new brush shapes

## Extended by

- [`ConeBrushShape`](ConeBrushShape.md)
- [`CuboidBrushShape`](CuboidBrushShape.md)
- [`CylinderBrushShape`](CylinderBrushShape.md)
- [`EllipsoidBrushShape`](EllipsoidBrushShape.md)
- [`PyramidBrushShape`](PyramidBrushShape.md)
- [`SingleBlockBrushShape`](SingleBlockBrushShape.md)

## Constructors

### Constructor

> **new BrushShape**(`_id`, `_displayName`, `_icon`): `BrushShape`

#### Parameters

##### \_id

`string`

##### \_displayName

`string`

##### \_icon

`string`

#### Returns

`BrushShape`

#### Remarks

Constructs a new instance of the `BrushShape` class

## Accessors

### displayName

#### Get Signature

> **get** **displayName**(): `string`

##### Returns

`string`

***

### icon

#### Get Signature

> **get** **icon**(): `string`

##### Returns

`string`

***

### id

#### Get Signature

> **get** **id**(): `string`

##### Returns

`string`

## Methods

### applySetting()

> `abstract` **applySetting**(`brushSettings`): `void`

#### Parameters

##### brushSettings

[`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

#### Returns

`void`

***

### createSettingsPane()

> `abstract` **createSettingsPane**(`parentPane`, `onSettingsChange?`): [`ISubPanePropertyItem`](../interfaces/ISubPanePropertyItem.md) \| `undefined`

#### Parameters

##### parentPane

[`IPropertyPane`](../interfaces/IPropertyPane.md)

##### onSettingsChange?

() => `void`

#### Returns

[`ISubPanePropertyItem`](../interfaces/ISubPanePropertyItem.md) \| `undefined`

***

### createShape()

> `abstract` **createShape**(): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

***

### getSettings()

> `abstract` **getSettings**(): [`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

#### Returns

[`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

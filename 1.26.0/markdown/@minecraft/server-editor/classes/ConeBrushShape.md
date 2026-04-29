[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ConeBrushShape

# Class: ConeBrushShape

The minecraftservereditorbindings.ClipboardManager (accessible from the minecraftservereditorbindings.ExtensionContext) is responsible for the management of all
[minecraftservereditorbindings.ClipboardItem](ClipboardItem.md) objects, and provides the user the
ability to create new [minecraftservereditorbindings.ClipboardItem](ClipboardItem.md) objects for use
within an extension.

## Extends

- [`BrushShape`](BrushShape.md)

## Constructors

### Constructor

> **new ConeBrushShape**(`settings?`): `ConeBrushShape`

#### Parameters

##### settings?

###### depth?

`number`

###### height?

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

`ConeBrushShape`

#### Remarks

Constructs a new instance of the `ConeBrushShape` class

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

[`ConeBrushShapeSettings`](../interfaces/ConeBrushShapeSettings.md)

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

> **getSettings**(): [`ConeBrushShapeSettings`](../interfaces/ConeBrushShapeSettings.md)

#### Returns

[`ConeBrushShapeSettings`](../interfaces/ConeBrushShapeSettings.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`getSettings`](BrushShape.md#getsettings)

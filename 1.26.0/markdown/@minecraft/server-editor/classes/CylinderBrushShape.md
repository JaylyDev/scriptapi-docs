[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / CylinderBrushShape

# Class: CylinderBrushShape

The 3D block cursor is controlled through this read only
object and provides the Editor some control over the input
methods, display properties and positioning of the 3D block
cursor within the world.
The 3D block cursor is a native object which is constantly
calculating a screen/mouse -> world raycast, and recording
the resultant block collision position and facing direction.
Depending on the properties of the cursor state, this is not
always true – the cursor can also be manually manipulated by
keyboard input and moved around independently of mouse
movement; when the mouse is moved, the block cursor will
return to the mouse/world ray intersection point.
The cursor can also be set to either block or face mode;
block mode represents the block the mouse is pointing at,
and face mode represents the adjacent block that the mouse
is pointing at (i.e. the block attached to the face of the
intersection point).
In practical use, each tool when activated grabs the current
cursor state object and stores it.  The active tool then
sets the current state to represent the functionality of the
tool (color, input mode, etc).  When the tool loses focus,
it restores the cursor state using the stored state object
that was grabbed during activation.
The 3D block cursor can also be used to query the current
block at which the mouse is pointing (or the current block
to which the cursor has been manually moved by the user)

## Extends

- [`BrushShape`](BrushShape.md)

## Constructors

### Constructor

> **new CylinderBrushShape**(`settings?`): `CylinderBrushShape`

#### Parameters

##### settings?

###### depth?

`number`

###### height?

`number`

###### hideRotation?

`boolean`

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

`CylinderBrushShape`

#### Remarks

Constructs a new instance of the `CylinderBrushShape` class

#### Overrides

[`BrushShape`](BrushShape.md).[`constructor`](BrushShape.md#constructor)

## Accessors

### depth

#### Get Signature

> **get** **depth**(): `number`

##### Returns

`number`

***

### displayName

#### Get Signature

> **get** **displayName**(): `string`

##### Returns

`string`

#### Inherited from

[`BrushShape`](BrushShape.md).[`displayName`](BrushShape.md#displayname)

***

### height

#### Get Signature

> **get** **height**(): `number`

##### Returns

`number`

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

***

### radius

#### Get Signature

> **get** **radius**(): `number`

##### Returns

`number`

***

### uniform

#### Get Signature

> **get** **uniform**(): `boolean`

##### Returns

`boolean`

***

### width

#### Get Signature

> **get** **width**(): `number`

##### Returns

`number`

## Methods

### applySetting()

> **applySetting**(`brushSettings`): `void`

#### Parameters

##### brushSettings

[`CylinderBrushShapeSettings`](../interfaces/CylinderBrushShapeSettings.md)

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

> **getSettings**(): [`CylinderBrushShapeSettings`](../interfaces/CylinderBrushShapeSettings.md)

#### Returns

[`CylinderBrushShapeSettings`](../interfaces/CylinderBrushShapeSettings.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`getSettings`](BrushShape.md#getsettings)

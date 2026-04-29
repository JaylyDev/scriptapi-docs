[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / PyramidBrushShape

# Class: PyramidBrushShape

Base for creating new brush shapes

## Source

```ts
export declare abstract class BrushShape {
    get displayName(): string;
    get icon(): string;
    get id(): string;
    constructor(_id: string, _displayName: string, _icon: string);
    abstract applySetting(brushSettings: BrushShapeSettings): void;
    abstract calculateBounds(): minecraftserver.BlockBoundingBox;
    abstract createSettingsPane(
        parentPane: IPropertyPane,
        onSettingsChange?: () => void,
        flatLayout?: boolean,
    ): ISubPanePropertyItem | undefined;
    abstract createShape(): RelativeVolumeListBlockVolume;
    abstract createShapeAsync(
        cancelToken?: {
            cancelled: boolean;
        },
        yieldInterval?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    abstract estimateBlockCount(): number;
    abstract getSettings(): BrushShapeSettings;
}
```

## Extends

- [`BrushShape`](BrushShape.md)

## Constructors

### Constructor

> **new PyramidBrushShape**(`settings?`): `PyramidBrushShape`

#### Parameters

##### settings?

###### depth?

`number`

###### enableHollowSettings?

`boolean`

###### height?

`number`

###### hollow?

`boolean`

###### maxHeight?

`number`

###### maxSide?

`number`

###### thickness?

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

`PyramidBrushShape`

#### Remarks

Constructs a new instance of the `PyramidBrushShape` class

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

[`PyramidBrushShapeSettings`](../interfaces/PyramidBrushShapeSettings.md)

#### Returns

`void`

#### Overrides

[`BrushShape`](BrushShape.md).[`applySetting`](BrushShape.md#applysetting)

***

### calculateBounds()

> **calculateBounds**(): [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

Object with min and max Vector3 bounds

#### Remarks

Calculates the bounding box of the shape in local
coordinates. Used for region allocation before shape
placement.

#### World Ready

This function can't be called in early-execution mode.

#### Overrides

[`BrushShape`](BrushShape.md).[`calculateBounds`](BrushShape.md#calculatebounds)

***

### createSettingsPane()

> **createSettingsPane**(`parentPane`, `onSettingsChange?`, `flatLayout?`): [`ISubPanePropertyItem`](../interfaces/ISubPanePropertyItem.md)

#### Parameters

##### parentPane

[`IPropertyPane`](../interfaces/IPropertyPane.md)

##### onSettingsChange?

() => `void`

##### flatLayout?

`boolean`

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

### createShapeAsync()

> **createShapeAsync**(`cancelToken?`, `yieldInterval?`): `Promise`\<[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)\>

#### Parameters

##### cancelToken?

Optional token to cancel the operation. Set cancelled to
true to abort.

###### cancelled

`boolean`

##### yieldInterval?

`number`

Number of blocks to process before yielding. Default is
10000.

#### Returns

`Promise`\<[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)\>

Promise that resolves to the shape positions as Vector3
array.

#### Remarks

Asynchronously creates the shape, yielding control
periodically to avoid timeouts. Use this for large shapes
where createShape() may timeout.

#### World Ready

This function can't be called in early-execution mode.

#### Overrides

[`BrushShape`](BrushShape.md).[`createShapeAsync`](BrushShape.md#createshapeasync)

***

### estimateBlockCount()

> **estimateBlockCount**(): `number`

#### Returns

`number`

Estimated block count

#### Remarks

Returns a mathematical estimate of the number of blocks in
the shape. Used for UI display and validation before shape
creation.

#### World Ready

This function can't be called in early-execution mode.

#### Overrides

[`BrushShape`](BrushShape.md).[`estimateBlockCount`](BrushShape.md#estimateblockcount)

***

### getSettings()

> **getSettings**(): [`PyramidBrushShapeSettings`](../interfaces/PyramidBrushShapeSettings.md)

#### Returns

[`PyramidBrushShapeSettings`](../interfaces/PyramidBrushShapeSettings.md)

#### Overrides

[`BrushShape`](BrushShape.md).[`getSettings`](BrushShape.md#getsettings)

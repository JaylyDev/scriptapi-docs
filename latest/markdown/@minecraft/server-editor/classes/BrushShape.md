[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / BrushShape

# Abstract Class: BrushShape

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

### calculateBounds()

> `abstract` **calculateBounds**(): [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

Object with min and max Vector3 bounds

#### Remarks

Calculates the bounding box of the shape in local
coordinates. Used for region allocation before shape
placement.

#### World Ready

This function can't be called in early-execution mode.

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

### createShapeAsync()

> `abstract` **createShapeAsync**(`cancelToken?`, `yieldInterval?`): `Promise`\<[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)\>

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

***

### estimateBlockCount()

> `abstract` **estimateBlockCount**(): `number`

#### Returns

`number`

Estimated block count

#### Remarks

Returns a mathematical estimate of the number of blocks in
the shape. Used for UI display and validation before shape
creation.

#### World Ready

This function can't be called in early-execution mode.

***

### getSettings()

> `abstract` **getSettings**(): [`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

#### Returns

[`BrushShapeSettings`](../type-aliases/BrushShapeSettings.md)

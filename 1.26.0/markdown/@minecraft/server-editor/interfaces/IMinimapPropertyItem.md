[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IMinimapPropertyItem

# Interface: IMinimapPropertyItem

A property item which supports Minimap properties

## Extends

- [`IPropertyItemBase`](IPropertyItemBase.md)

## Properties

### enable

> **enable**: `boolean`

#### Remarks

If the item is enabled in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`enable`](IPropertyItemBase.md#enable)

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the property item.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`id`](IPropertyItemBase.md#id)

***

### mapId

> `readonly` **mapId**: `string`

#### Remarks

Id of the map.

***

### mapImageHeight

> `readonly` **mapImageHeight**: `number`

#### Remarks

Height of the map image.

***

### mapImageWidth

> `readonly` **mapImageWidth**: `number`

#### Remarks

Width of the map image.

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

The parent pane id.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`paneId`](IPropertyItemBase.md#paneid)

***

### typeName

> `readonly` **typeName**: [`PropertyItemType`](../enumerations/PropertyItemType.md)

#### Remarks

The type name of the target property.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`typeName`](IPropertyItemBase.md#typename)

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### assignMarker()

> **assignMarker**(`markerType`): `void`

#### Parameters

##### markerType

[`Multiplayer`](../enumerations/MinimapMarkerType.md#multiplayer)

The type of marker to add.

#### Returns

`void`

#### Remarks

Adds a marker to the minimap.

***

### refreshMap()

> **refreshMap**(): `void`

#### Returns

`void`

#### Remarks

Refreshes the map.

***

### removeMarker()

> **removeMarker**(`markerType`): `void`

#### Parameters

##### markerType

[`Multiplayer`](../enumerations/MinimapMarkerType.md#multiplayer)

The type of marker to remove.

#### Returns

`void`

#### Remarks

Removes a marker from the minimap.

***

### resizeMapImage()

> **resizeMapImage**(`width`, `height`): `void`

#### Parameters

##### width

`number`

New width of the image.

##### height

`number`

New height of the image.

#### Returns

`void`

#### Remarks

Updates the size of the map image.

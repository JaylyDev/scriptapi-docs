[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / INumberTimelinePropertyItem

# Interface: INumberTimelinePropertyItem

A property item which supports Number Timeline properties

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

### addNode()

> **addNode**(`data`): `void`

#### Parameters

##### data

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)

New color node.

#### Returns

`void`

#### Remarks

Update color timeline entry

***

### getData()

> **getData**(): [`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)[]

#### Returns

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)[]

#### Remarks

Get the list of nodes in the property item.

***

### getTime()

> **getTime**(): `number`

#### Returns

`number`

#### Remarks

Get time current time value on the slider.

***

### removeNode()

> **removeNode**(`data`): `void`

#### Parameters

##### data

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)

Node to be removed.

#### Returns

`void`

#### Remarks

Remove color node

***

### setBounds()

> **setBounds**(`bounds`): `void`

#### Parameters

##### bounds

###### maxValue

`number`

###### minValue

`number`

#### Returns

`void`

#### Remarks

Updates data entries value bounds.

***

### setSeparatorSliceCount()

> **setSeparatorSliceCount**(`counts`): `void`

#### Parameters

##### counts

[`Vector2`](../../server/interfaces/Vector2.md)

Counts for the thin grid lines.

#### Returns

`void`

#### Remarks

Set separator slice counts for x and y for the minor grid.

***

### setSeparatorStepCount()

> **setSeparatorStepCount**(`counts`): `void`

#### Parameters

##### counts

[`Vector2`](../../server/interfaces/Vector2.md)

Counts for the thick grid lines.

#### Returns

`void`

#### Remarks

Set separator step counts for x and y for the major grid.

***

### setTime()

> **setTime**(`time`): `void`

#### Parameters

##### time

`number`

The new time value.

#### Returns

`void`

#### Remarks

Set time line slider value to a new value

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md)

New title.

#### Returns

`void`

#### Remarks

Updates title of the property item.

***

### updateNode()

> **updateNode**(`data`): `void`

#### Parameters

##### data

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)

Node to be updated.

#### Returns

`void`

#### Remarks

Update node value

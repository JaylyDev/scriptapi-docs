[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IColorTimelinePropertyItem

# Interface: IColorTimelinePropertyItem

A property item which supports Color Timeline properties

## Source

```ts
export interface IColorTimelinePropertyItem extends IPropertyItemBase {
    addNode(data: IColorTimelinePropertyItemEntry): void;
    getData(): IColorTimelinePropertyItemEntry[];
    getTime(): number;
    removeNode(data: IColorTimelinePropertyItemEntry): void;
    setPrecision(precision: number): void;
    setTime(time: number): void;
    setTitle(title: LocalizedString): void;
    updateNode(data: IColorTimelinePropertyItemEntry): void;
}
```

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

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)

New color node.

#### Returns

`void`

#### Remarks

Update color timeline entry

***

### getData()

> **getData**(): [`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)[]

#### Returns

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)[]

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

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)

Node to be removed.

#### Returns

`void`

#### Remarks

Remove color node

***

### setPrecision()

> **setPrecision**(`precision`): `void`

#### Parameters

##### precision

`number`

#### Returns

`void`

#### Remarks

Set custom decimal precision for the calculations

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

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)

Node to be updated.

#### Returns

`void`

#### Remarks

Update node value

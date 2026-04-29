[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IVector3TimelinePropertyItem

# Interface: IVector3TimelinePropertyItem

A property item which supports Vector3 Timeline properties

## Source

```ts
export interface IVector3TimelinePropertyItem extends IPropertyItemBase {
    addNode(data: IVector3TimelinePropertyItemEntry): void;
    getData(): IVector3TimelinePropertyItemEntry[];
    getTime(): number;
    removeNode(data: IVector3TimelinePropertyItemEntry): void;
    setBounds(bounds: { minValue: number; maxValue: number }): void;
    setPrecision(precision: number): void;
    setTime(time: number): void;
    setTitle(title: LocalizedString): void;
    updateNode(data: IVector3TimelinePropertyItemEntry): void;
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

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)

New vector3 node.

#### Returns

`void`

#### Remarks

Update vector3 timeline entry

***

### getData()

> **getData**(): [`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)[]

#### Returns

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)[]

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

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)

Node to be removed.

#### Returns

`void`

#### Remarks

Remove vector3 node

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

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)

Node to be updated.

#### Returns

`void`

#### Remarks

Update node value

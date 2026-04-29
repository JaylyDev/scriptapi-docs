[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IImagePropertyItem

# Interface: IImagePropertyItem

A property item which supports Image properties

## Source

```ts
export interface IImagePropertyItem extends IPropertyItemBase {
    readonly imageHeight: number;
    readonly imageWidth: number;
    readonly value: Readonly<string | ImageResourceData>;
    resizeImage(width: number, height: number): void;
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

### imageHeight

> `readonly` **imageHeight**: `number`

#### Remarks

Height of the image.

***

### imageWidth

> `readonly` **imageWidth**: `number`

#### Remarks

Width of the image.

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

### value

> `readonly` **value**: `Readonly`\<`string` \| [`ImageResourceData`](../type-aliases/ImageResourceData.md)\>

#### Remarks

Current value of the property item.

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### resizeImage()

> **resizeImage**(`width`, `height`): `void`

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

Updates the size of the image.

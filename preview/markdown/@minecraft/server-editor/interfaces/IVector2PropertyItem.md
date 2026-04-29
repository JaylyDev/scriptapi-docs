[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IVector2PropertyItem

# Interface: IVector2PropertyItem

A property item which supports Vector2 properties

## Source

```ts
export interface IVector2PropertyItem extends IPropertyItemBase {
    readonly value: Readonly<minecraftserver.Vector2>;
    setTitle(title: LocalizedString | undefined): void;
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    updateAxisLimits(limits: { min?: Partial<minecraftserver.Vector2>; max?: Partial<minecraftserver.Vector2> }): void;
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

### value

> `readonly` **value**: `Readonly`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

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

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

New button title.

#### Returns

`void`

#### Remarks

Updates title of the button.

***

### setTooltip()

> **setTooltip**(`tooltip`): `void`

#### Parameters

##### tooltip

[`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md) \| `undefined`

New button tooltip.

#### Returns

`void`

#### Remarks

Updates tooltip description of the button.

***

### updateAxisLimits()

> **updateAxisLimits**(`limits`): `void`

#### Parameters

##### limits

###### max?

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

###### min?

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

`void`

#### Remarks

Updates Vector2 limits and clamps the current value.

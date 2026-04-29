[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IButtonPropertyItem

# Interface: IButtonPropertyItem

A property item which supports Button properties

## Source

```ts
export interface IButtonPropertyItem extends IPropertyItemBase {
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    setIcon(icon: string | undefined): void;
    setTitle(title: LocalizedString | undefined): void;
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
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

### replaceAction()

> **replaceAction**(`action`): `void`

#### Parameters

##### action

[`RegisteredAction`](../type-aliases/RegisteredAction.md)\<[`NoArgsAction`](../type-aliases/NoArgsAction.md)\>

New action to replace the existing with.

#### Returns

`void`

#### Remarks

Replace action assigned to the button.

***

### setIcon()

> **setIcon**(`icon`): `void`

#### Parameters

##### icon

`string` \| `undefined`

New button icon.

#### Returns

`void`

#### Remarks

Updates icon of the button.

***

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

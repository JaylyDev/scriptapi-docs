[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IButtonPanePropertyItem

# Interface: IButtonPanePropertyItem

A property item pane which supports multiple buttons

## Source

```ts
export interface IButtonPanePropertyItem extends IPropertyItemBase, IPane {
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
}
```

## Extends

- [`IPropertyItemBase`](IPropertyItemBase.md).[`IPane`](IPane.md)

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

### addButton()

> **addButton**(`action`, `options?`): [`IButtonPropertyItem`](IButtonPropertyItem.md)

#### Parameters

##### action

[`ButtonPropertyItemSupportedActionTypes`](../type-aliases/ButtonPropertyItemSupportedActionTypes.md)

##### options?

[`IButtonPropertyItemOptions`](IButtonPropertyItemOptions.md)

#### Returns

[`IButtonPropertyItem`](IButtonPropertyItem.md)

#### Remarks

Adds a button to the pane and binds the specified action to
the button interaction.

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the pane.

#### Inherited from

[`IPane`](IPane.md).[`hide`](IPane.md#hide)

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the pane and all of its items.

#### Inherited from

[`IPane`](IPane.md).[`show`](IPane.md#show)

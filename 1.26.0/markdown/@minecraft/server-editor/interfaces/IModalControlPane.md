[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalControlPane

# Interface: IModalControlPane

A sub pane for modal control elements.

## Extends

- [`IPane`](IPane.md)

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the pane.

#### Inherited from

[`IPane`](IPane.md).[`id`](IPane.md#id)

***

### visible

> **visible**: `boolean`

#### Remarks

Check visibility of the pane

#### Inherited from

[`IPane`](IPane.md).[`visible`](IPane.md#visible)

## Methods

### addBool()

> **addBool**(`value`, `options?`): [`IBoolPropertyItem`](IBoolPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`boolean`\>

##### options?

[`IBoolPropertyItemOptions`](IBoolPropertyItemOptions.md)

#### Returns

[`IBoolPropertyItem`](IBoolPropertyItem.md)

#### Remarks

Adds a togglable boolean item to the pane.

***

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
the button activation.

***

### addButtonPane()

> **addButtonPane**(`options?`): [`IButtonPanePropertyItem`](IButtonPanePropertyItem.md)

#### Parameters

##### options?

[`IButtonPanePropertyItemOptions`](IButtonPanePropertyItemOptions.md)

#### Returns

[`IButtonPanePropertyItem`](IButtonPanePropertyItem.md)

#### Remarks

Adds a pane for grouped button layout.

***

### addDivider()

> **addDivider**(): [`IPropertyItemBase`](IPropertyItemBase.md)

#### Returns

[`IPropertyItemBase`](IPropertyItemBase.md)

#### Remarks

Adds an divider item to the pane.

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

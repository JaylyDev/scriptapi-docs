[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntryStringItem

# Interface: ICollectionTreeEntryStringItem

## Extends

- [`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md)

## Properties

### enabled

> `readonly` **enabled**: `boolean`

#### Remarks

Enabled state of the entry.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`enabled`](ICollectionTreeEntryItem.md#enabled)

***

### parentEntry

> `readonly` **parentEntry**: [`ICollectionTreeEntry`](ICollectionTreeEntry.md)

#### Remarks

Tree entry that owns the item.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`parentEntry`](ICollectionTreeEntryItem.md#parententry)

***

### type

> `readonly` **type**: [`CollectionTreeEntryItemType`](../enumerations/CollectionTreeEntryItemType.md)

#### Remarks

Type of the item.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`type`](ICollectionTreeEntryItem.md#type)

***

### value

> `readonly` **value**: `string`

#### Remarks

Value of the entry item.

***

### visible

> `readonly` **visible**: `boolean`

#### Remarks

Visibility state of the entry.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`visible`](ICollectionTreeEntryItem.md#visible)

## Methods

### setEnabled()

> **setEnabled**(`enabled`): `void`

#### Parameters

##### enabled

`boolean`

New value.

#### Returns

`void`

#### Remarks

Updates enabled state of the item.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`setEnabled`](ICollectionTreeEntryItem.md#setenabled)

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

New title.

#### Returns

`void`

#### Remarks

Updates title of the item.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`setTitle`](ICollectionTreeEntryItem.md#settitle)

***

### setTooltip()

> **setTooltip**(`title`): `void`

#### Parameters

##### title

[`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md) \| `undefined`

#### Returns

`void`

#### Remarks

Updates tooltip of the item.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`setTooltip`](ICollectionTreeEntryItem.md#settooltip)

***

### setVisible()

> **setVisible**(`visible`): `void`

#### Parameters

##### visible

`boolean`

New value.

#### Returns

`void`

#### Remarks

Updates visibility of the item.

#### Inherited from

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md).[`setVisible`](ICollectionTreeEntryItem.md#setvisible)

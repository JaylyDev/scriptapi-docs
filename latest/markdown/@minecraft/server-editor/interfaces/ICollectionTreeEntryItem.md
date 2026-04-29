[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntryItem

# Interface: ICollectionTreeEntryItem

## Extended by

- [`ICollectionTreeEntryDropdownItem`](ICollectionTreeEntryDropdownItem.md)
- [`ICollectionTreeEntryNumberItem`](ICollectionTreeEntryNumberItem.md)
- [`ICollectionTreeEntryStringItem`](ICollectionTreeEntryStringItem.md)

## Properties

### enabled

> `readonly` **enabled**: `boolean`

#### Remarks

Enabled state of the entry.

***

### parentEntry

> `readonly` **parentEntry**: [`ICollectionTreeEntry`](ICollectionTreeEntry.md)

#### Remarks

Tree entry that owns the item.

***

### type

> `readonly` **type**: [`CollectionTreeEntryItemType`](../enumerations/CollectionTreeEntryItemType.md)

#### Remarks

Type of the item.

***

### visible

> `readonly` **visible**: `boolean`

#### Remarks

Visibility state of the entry.

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

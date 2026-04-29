[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeEntry

# Interface: ICollectionTreeEntry

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the entry.

***

### index

> `readonly` **index**: `number`

#### Remarks

Index of the entry in the folder

***

### parent

> `readonly` **parent**: [`ICollectionTreeFolder`](ICollectionTreeFolder.md)

#### Remarks

Parent folder of the entry.

***

### selected

> `readonly` **selected**: `boolean`

#### Remarks

Selected state of the entry

## Methods

### addDropdownItem()

> **addDropdownItem**(`params`): [`ICollectionTreeEntryDropdownItem`](ICollectionTreeEntryDropdownItem.md)

#### Parameters

##### params

[`ICollectionTreeEntryDropdownItemParams`](../type-aliases/ICollectionTreeEntryDropdownItemParams.md)

#### Returns

[`ICollectionTreeEntryDropdownItem`](ICollectionTreeEntryDropdownItem.md)

#### Remarks

Adds a dropdown item to the entry

***

### addNumberItem()

> **addNumberItem**(`params`): [`ICollectionTreeEntryNumberItem`](ICollectionTreeEntryNumberItem.md)

#### Parameters

##### params

[`ICollectionTreeEntryNumberItemParams`](../type-aliases/ICollectionTreeEntryNumberItemParams.md)

#### Returns

[`ICollectionTreeEntryNumberItem`](ICollectionTreeEntryNumberItem.md)

#### Remarks

Adds a number item to the entry

***

### addStringItem()

> **addStringItem**(`params`): [`ICollectionTreeEntryStringItem`](ICollectionTreeEntryStringItem.md)

#### Parameters

##### params

[`ICollectionTreeEntryStringItemParams`](../type-aliases/ICollectionTreeEntryStringItemParams.md)

#### Returns

[`ICollectionTreeEntryStringItem`](ICollectionTreeEntryStringItem.md)

#### Remarks

Adds a string item to the entry

***

### getItemByIndex()

> **getItemByIndex**(`index`): [`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md) \| `undefined`

#### Parameters

##### index

`number`

Index of the entry item

#### Returns

[`ICollectionTreeEntryItem`](ICollectionTreeEntryItem.md) \| `undefined`

#### Remarks

Gets the tree entry item by index

***

### setColor()

> **setColor**(`color`): `void`

#### Parameters

##### color

[`RGBA`](../../server/interfaces/RGBA.md) \| `undefined`

#### Returns

`void`

#### Remarks

Set color associated with the entry

***

### setSelected()

> **setSelected**(`selected`): `void`

#### Parameters

##### selected

`boolean`

New selected state

#### Returns

`void`

#### Remarks

Set selected state of the entry.

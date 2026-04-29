[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IStatusBarItem

# Interface: IStatusBarItem

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the item.

## Methods

### getText()

> **getText**(): [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Returns

[`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Returns display text of the item.

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the Status Bar Item.

***

### setText()

> **setText**(`text`): `void`

#### Parameters

##### text

[`LocalizedString`](../type-aliases/LocalizedString.md)

New display text

#### Returns

`void`

#### Remarks

Updates display text of the item.

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the Status Bar Item.

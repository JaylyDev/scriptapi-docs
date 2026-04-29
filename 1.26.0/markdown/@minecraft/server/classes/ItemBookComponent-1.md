[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemBookComponent

# Class: ItemBookComponent

When present on an item, this item is a book item. Can
access and modify the contents of the book and sign it.

## Extends

- [`ItemComponent`](ItemComponent-1.md)

## Constructors

### Constructor

> `private` **new ItemBookComponent**(): `ItemBookComponent`

#### Returns

`ItemBookComponent`

#### Overrides

[`ItemComponent`](ItemComponent-1.md).[`constructor`](ItemComponent-1.md#constructor)

## Properties

### author?

> `readonly` `optional` **author?**: `string`

#### Remarks

The name of the author of the book if it is signed,
otherwise undefined.

#### Throws

This property can throw when used.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### contents

> `readonly` **contents**: (`string` \| `undefined`)[]

#### Remarks

The contents of pages in the book that are in string format.
Entries not in string format will be undefined.

#### Throws

This property can throw when used.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### isSigned

> `readonly` **isSigned**: `boolean`

#### Remarks

Determines whether the book has been signed or not.

#### Throws

This property can throw when used.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent-1.md).[`isValid`](ItemComponent-1.md#isvalid)

***

### pageCount

> `readonly` **pageCount**: `number`

#### Remarks

The amount of pages the book has.

#### Throws

This property can throw when used.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### rawContents

> `readonly` **rawContents**: ([`RawMessage`](../interfaces/RawMessage-1.md) \| `undefined`)[]

#### Remarks

The contents of pages in the book that are in [RawMessage](../interfaces/RawMessage-1.md) format. Entries not in [RawMessage](../interfaces/RawMessage-1.md) format
will be undefined.

#### Throws

This property can throw when used.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### title?

> `readonly` `optional` **title?**: `string`

#### Remarks

The title of the book if it is signed, otherwise undefined.

#### Throws

This property can throw when used.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent-1.md).[`typeId`](ItemComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:book"` = `'minecraft:book'`

## Methods

### getPageContent()

> **getPageContent**(`pageIndex`): `string` \| `undefined`

#### Parameters

##### pageIndex

`number`

The index of the page.

#### Returns

`string` \| `undefined`

The content of the page if a valid index is provided and it
is in string format, otherwise returns undefined.

#### Remarks

Gets the string format content of a page for a given index.

#### Throws

This function can throw errors.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getRawPageContent()

> **getRawPageContent**(`pageIndex`): [`RawMessage`](../interfaces/RawMessage-1.md) \| `undefined`

#### Parameters

##### pageIndex

`number`

The index of the page.

#### Returns

[`RawMessage`](../interfaces/RawMessage-1.md) \| `undefined`

The content of the page if a valid index is provided and it
is in [RawMessage](../interfaces/RawMessage-1.md) format, otherwise returns
undefined.

#### Remarks

Gets the [RawMessage](../interfaces/RawMessage-1.md) format content of a page for a
given index.

#### Throws

This function can throw errors.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### insertPage()

> **insertPage**(`pageIndex`, `content`): `void`

#### Parameters

##### pageIndex

`number`

The index of the page.

##### content

`string` \| [`RawMessage`](../interfaces/RawMessage-1.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage-1.md))[]

The content to set for the page. Can be a single string or
[RawMessage](../interfaces/RawMessage-1.md) or an array of strings and/or [RawMessage](../interfaces/RawMessage-1.md)s

#### Returns

`void`

#### Remarks

Inserts a page at a given index. Empty pages will be created
if the index is greater than the current book size.
Pages have a maximum limit of 256 characters for strings as
well as the JSON representation of a [RawMessage](../interfaces/RawMessage-1.md).
Books have a maximum limit of 50 pages.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[BookError](BookError-1.md)

[BookPageContentError](BookPageContentError-1.md)

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removePage()

> **removePage**(`pageIndex`): `void`

#### Parameters

##### pageIndex

`number`

The index of the page.

#### Returns

`void`

#### Remarks

Removes a page at a given index. Existing pages following
this page will be moved backward to fill the empty space.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setContents()

> **setContents**(`contents`): `void`

#### Parameters

##### contents

(`string` \| [`RawMessage`](../interfaces/RawMessage-1.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage-1.md))[])[]

An array of each page's contents. Each page can be a single
string or [RawMessage](../interfaces/RawMessage-1.md) or an array of strings and/or
[RawMessage](../interfaces/RawMessage-1.md)s.

#### Returns

`void`

#### Remarks

Sets the contents of the book's pages. Pre-existing pages
will be cleared.
Pages have a maximum limit of 256 characters for strings as
well as the JSON representation of a [RawMessage](../interfaces/RawMessage-1.md).
Books have a maximum limit of 50 pages.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[BookError](BookError-1.md)

[BookPageContentError](BookPageContentError-1.md)

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setPageContent()

> **setPageContent**(`pageIndex`, `content`): `void`

#### Parameters

##### pageIndex

`number`

The index of the page.

##### content

`string` \| [`RawMessage`](../interfaces/RawMessage-1.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage-1.md))[]

The content to set for the page. Can be a single string or
[RawMessage](../interfaces/RawMessage-1.md) or an array of strings and/or [RawMessage](../interfaces/RawMessage-1.md)s

#### Returns

`void`

#### Remarks

Sets or creates the content of a specific page. Empty pages
will be created if the index is greater than the current
book size.
Pages have a maximum limit of 256 characters for strings as
well as the JSON representation of a [RawMessage](../interfaces/RawMessage-1.md).
Books have a maximum limit of 50 pages.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[BookError](BookError-1.md)

[BookPageContentError](BookPageContentError-1.md)

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### signBook()

> **signBook**(`title`, `author`): `void`

#### Parameters

##### title

`string`

The title to give the book.

##### author

`string`

The name of the book's author.

#### Returns

`void`

#### Remarks

Signs a book giving it a title and author name. Once signed
players can no longer directly edit the book.
Titles have a maximum character limit of 16.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[BookError](BookError-1.md)

[InvalidEntityError](InvalidEntityError-1.md)

[InvalidItemStackError](InvalidItemStackError-1.md)

#### World Ready

This function can't be called in early-execution mode.

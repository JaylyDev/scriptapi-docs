[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemTypes

# Class: ItemTypes

Returns the set of item types registered within Minecraft.

## Constructors

### Constructor

> `private` **new ItemTypes**(): `ItemTypes`

#### Returns

`ItemTypes`

## Methods

### get()

> `static` **get**(`itemId`): [`ItemType`](ItemType.md) \| `undefined`

#### Parameters

##### itemId

`string`

#### Returns

[`ItemType`](ItemType.md) \| `undefined`

#### Remarks

Returns a specific item type, if available within Minecraft.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`ItemType`](ItemType.md)[]

#### Returns

[`ItemType`](ItemType.md)[]

#### Remarks

Retrieves all available item types registered within
Minecraft.

#### World Ready

This function can't be called in early-execution mode.

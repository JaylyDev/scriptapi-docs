[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemTypes

# Class: ItemTypes

Returns the set of item types registered within Minecraft.

## Source

```ts
export class ItemTypes {
    private constructor();
    static get(itemId: string): ItemType | undefined;
    static getAll(): ItemType[];
}
```

## Constructors

### Constructor

> `private` **new ItemTypes**(): `ItemTypes`

#### Returns

`ItemTypes`

## Methods

### get()

> `static` **get**(`itemId`): [`ItemType`](ItemType-1.md) \| `undefined`

#### Parameters

##### itemId

`string`

#### Returns

[`ItemType`](ItemType-1.md) \| `undefined`

#### Remarks

Returns a specific item type, if available within Minecraft.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`ItemType`](ItemType-1.md)[]

#### Returns

[`ItemType`](ItemType-1.md)[]

#### Remarks

Retrieves all available item types registered within
Minecraft.

#### World Ready

This function can't be called in early-execution mode.

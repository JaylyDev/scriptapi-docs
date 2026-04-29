[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemType

# Class: ItemType

Represents the type of an item - for example, Wool.

## Source

```ts
export class ItemType {
    private constructor();
    readonly id: string;
    readonly localizationKey: string;
}
```

## Constructors

### Constructor

> `private` **new ItemType**(): `ItemType`

#### Returns

`ItemType`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Returns the identifier of the item type - for example,
'minecraft:apple'.

#### World Ready

This property can't be read in early-execution mode.

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of this ItemType's name used in
.lang files.

#### World Ready

This property can't be read in early-execution mode.

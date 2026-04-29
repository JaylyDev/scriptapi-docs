[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EnchantmentTypes

# Class: EnchantmentTypes

Contains a catalog of Minecraft Enchantment Types that are
available in this world.

## Source

```ts
export class EnchantmentTypes {
    private constructor();
    static get(enchantmentId: string): EnchantmentType | undefined;
    static getAll(): EnchantmentType[];
}
```

## Constructors

### Constructor

> `private` **new EnchantmentTypes**(): `EnchantmentTypes`

#### Returns

`EnchantmentTypes`

## Methods

### get()

> `static` **get**(`enchantmentId`): [`EnchantmentType`](EnchantmentType.md) \| `undefined`

#### Parameters

##### enchantmentId

`string`

Identifier of the enchantment.  For example,
"minecraft:flame".

#### Returns

[`EnchantmentType`](EnchantmentType.md) \| `undefined`

If available, returns an EnchantmentType object that
represents the specified enchantment.

#### Remarks

Retrieves an enchantment with the specified identifier.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`EnchantmentType`](EnchantmentType.md)[]

#### Returns

[`EnchantmentType`](EnchantmentType.md)[]

#### Remarks

Returns a collection of all available enchantment types.

#### World Ready

This function can't be called in early-execution mode.

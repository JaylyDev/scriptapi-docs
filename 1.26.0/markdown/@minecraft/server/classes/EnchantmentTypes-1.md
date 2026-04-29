[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EnchantmentTypes

# Class: EnchantmentTypes

Contains a catalog of Minecraft Enchantment Types that are
available in this world.

## Constructors

### Constructor

> `private` **new EnchantmentTypes**(): `EnchantmentTypes`

#### Returns

`EnchantmentTypes`

## Methods

### get()

> `static` **get**(`enchantmentId`): [`EnchantmentType`](EnchantmentType-1.md) \| `undefined`

#### Parameters

##### enchantmentId

`string`

Identifier of the enchantment.  For example,
"minecraft:flame".

#### Returns

[`EnchantmentType`](EnchantmentType-1.md) \| `undefined`

If available, returns an EnchantmentType object that
represents the specified enchantment.

#### Remarks

Retrieves an enchantment with the specified identifier.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`EnchantmentType`](EnchantmentType-1.md)[]

#### Returns

[`EnchantmentType`](EnchantmentType-1.md)[]

#### Remarks

Returns a collection of all available enchantment types.

#### World Ready

This function can't be called in early-execution mode.

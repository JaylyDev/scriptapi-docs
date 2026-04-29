[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / Potions

# Class: Potions

Used for accessing all potion effect types, delivery types,
and creating potions.

## Constructors

### Constructor

> `private` **new Potions**(): `Potions`

#### Returns

`Potions`

## Methods

### getAllDeliveryTypes()

> `static` **getAllDeliveryTypes**(): [`PotionDeliveryType`](PotionDeliveryType-1.md)[]

#### Returns

[`PotionDeliveryType`](PotionDeliveryType-1.md)[]

Array of all registered delivery type handles.

#### Remarks

Retrieves handles for all registered potion delivery types.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllEffectTypes()

> `static` **getAllEffectTypes**(): [`PotionEffectType`](PotionEffectType-1.md)[]

#### Returns

[`PotionEffectType`](PotionEffectType-1.md)[]

Array of all registered effect type handles.

#### Remarks

Retrieves all type handle for all registered potion effects.

#### World Ready

This function can't be called in early-execution mode.

***

### getDeliveryType()

> `static` **getDeliveryType**(`potionDeliveryId`): [`PotionDeliveryType`](PotionDeliveryType-1.md) \| `undefined`

#### Parameters

##### potionDeliveryId

`string`

#### Returns

[`PotionDeliveryType`](PotionDeliveryType-1.md) \| `undefined`

A type handle wrapping the valid delivery id, or undefined
for an invalid delivery id.

#### Remarks

Retrieves a type handle for a specified potion delivery id.

#### World Ready

This function can't be called in early-execution mode.

***

### getEffectType()

> `static` **getEffectType**(`potionEffectId`): [`PotionEffectType`](PotionEffectType-1.md) \| `undefined`

#### Parameters

##### potionEffectId

`string`

A valid potion effect id. See
@minecraft/vanilla-data.MinecraftPotionEffectTypes

#### Returns

[`PotionEffectType`](PotionEffectType-1.md) \| `undefined`

A type handle wrapping the valid effect id, or undefined for
an invalid effect id.

#### Remarks

Retrieves a type handle for a specified potion effect id.

#### World Ready

This function can't be called in early-execution mode.

***

### resolve()

> `static` **resolve**\<`T`, `U`\>(`potionEffectType`, `potionDeliveryType`): [`ItemStack`](ItemStack-1.md)

#### Type Parameters

##### T

`T` *extends* `string` = `MinecraftPotionEffectTypes`

##### U

`U` *extends* `string` = `MinecraftPotionDeliveryTypes`

#### Parameters

##### potionEffectType

[`PotionEffectType`](PotionEffectType-1.md) \| `T`

##### potionDeliveryType

[`PotionDeliveryType`](PotionDeliveryType-1.md) \| `U`

#### Returns

[`ItemStack`](ItemStack-1.md)

#### Remarks

Creates a potion given an effect and delivery type.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidPotionDeliveryTypeError](InvalidPotionDeliveryTypeError-1.md)

[InvalidPotionEffectTypeError](InvalidPotionEffectTypeError-1.md)

#### World Ready

This function can't be called in early-execution mode.

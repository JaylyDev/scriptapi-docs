[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / Potions

# Class: Potions

Used for accessing all potion effect types, delivery types,
and creating potions.

## Source

```ts
export class Potions {
    private constructor();
    static getAllDeliveryTypes(): PotionDeliveryType[];
    static getAllEffectTypes(): PotionEffectType[];
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    static resolve(
        potionEffectType: PotionEffectType | string,
        potionDeliveryType: PotionDeliveryType | string,
    ): ItemStack;
}
```

## Constructors

### Constructor

> `private` **new Potions**(): `Potions`

#### Returns

`Potions`

## Methods

### getAllDeliveryTypes()

> `static` **getAllDeliveryTypes**(): [`PotionDeliveryType`](PotionDeliveryType.md)[]

#### Returns

[`PotionDeliveryType`](PotionDeliveryType.md)[]

Array of all registered delivery type handles.

#### Remarks

Retrieves handles for all registered potion delivery types.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllEffectTypes()

> `static` **getAllEffectTypes**(): [`PotionEffectType`](PotionEffectType.md)[]

#### Returns

[`PotionEffectType`](PotionEffectType.md)[]

Array of all registered effect type handles.

#### Remarks

Retrieves all type handle for all registered potion effects.

#### World Ready

This function can't be called in early-execution mode.

***

### getDeliveryType()

> `static` **getDeliveryType**(`potionDeliveryId`): [`PotionDeliveryType`](PotionDeliveryType.md) \| `undefined`

#### Parameters

##### potionDeliveryId

`string`

#### Returns

[`PotionDeliveryType`](PotionDeliveryType.md) \| `undefined`

A type handle wrapping the valid delivery id, or undefined
for an invalid delivery id.

#### Remarks

Retrieves a type handle for a specified potion delivery id.

#### World Ready

This function can't be called in early-execution mode.

***

### getEffectType()

> `static` **getEffectType**(`potionEffectId`): [`PotionEffectType`](PotionEffectType.md) \| `undefined`

#### Parameters

##### potionEffectId

`string`

A valid potion effect id. See
@minecraft/vanilla-data.MinecraftPotionEffectTypes

#### Returns

[`PotionEffectType`](PotionEffectType.md) \| `undefined`

A type handle wrapping the valid effect id, or undefined for
an invalid effect id.

#### Remarks

Retrieves a type handle for a specified potion effect id.

#### World Ready

This function can't be called in early-execution mode.

***

### resolve()

> `static` **resolve**(`potionEffectType`, `potionDeliveryType`): [`ItemStack`](ItemStack.md)

#### Parameters

##### potionEffectType

`string` \| [`PotionEffectType`](PotionEffectType.md)

##### potionDeliveryType

`string` \| [`PotionDeliveryType`](PotionDeliveryType.md)

#### Returns

[`ItemStack`](ItemStack.md)

#### Remarks

Creates a potion given an effect and delivery type.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidPotionDeliveryTypeError](InvalidPotionDeliveryTypeError.md)

[InvalidPotionEffectTypeError](InvalidPotionEffectTypeError.md)

#### World Ready

This function can't be called in early-execution mode.

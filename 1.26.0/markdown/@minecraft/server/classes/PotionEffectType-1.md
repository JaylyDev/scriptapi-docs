[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PotionEffectType

# Class: PotionEffectType

Represents a type of potion effect - like healing or
leaping.

## Constructors

### Constructor

> `private` **new PotionEffectType**(): `PotionEffectType`

#### Returns

`PotionEffectType`

## Properties

### durationTicks?

> `readonly` `optional` **durationTicks?**: `number`

#### Remarks

Duration of the effect when applied to an entity in ticks.
Undefined means the effect does not expire.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### id

> `readonly` **id**: `string`

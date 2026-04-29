[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemPotionComponent

# Class: ItemPotionComponent

When present on an item, this item is a potion item.

## Extends

- [`ItemComponent`](ItemComponent-1.md)

## Constructors

### Constructor

> `private` **new ItemPotionComponent**(): `ItemPotionComponent`

#### Returns

`ItemPotionComponent`

#### Overrides

[`ItemComponent`](ItemComponent-1.md).[`constructor`](ItemComponent-1.md#constructor)

## Properties

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

### potionDeliveryType

> `readonly` **potionDeliveryType**: [`PotionDeliveryType`](PotionDeliveryType-1.md)

#### Remarks

The PotionDeliveryType associated with the potion item.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

#### World Ready

This property can't be read in early-execution mode.

***

### potionEffectType

> `readonly` **potionEffectType**: [`PotionEffectType`](PotionEffectType-1.md)

#### Remarks

The PotionEffectType associated with the potion item.

#### Throws

This property can throw when used.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

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

> `readonly` `static` **componentId**: `"minecraft:potion"` = `'minecraft:potion'`

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ItemPotionComponent

# Class: ItemPotionComponent

When present on an item, this item is a potion item.

## Extends

- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new ItemPotionComponent**(): `ItemPotionComponent`

#### Returns

`ItemPotionComponent`

#### Overrides

[`ItemComponent`](ItemComponent.md).[`constructor`](ItemComponent.md#constructor)

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

[`ItemComponent`](ItemComponent.md).[`isValid`](ItemComponent.md#isvalid)

***

### potionDeliveryType

> `readonly` **potionDeliveryType**: [`PotionDeliveryType`](PotionDeliveryType.md)

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

> `readonly` **potionEffectType**: [`PotionEffectType`](PotionEffectType.md)

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

[`ItemComponent`](ItemComponent.md).[`typeId`](ItemComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:potion"` = `'minecraft:potion'`

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ItemComponentBeforeDurabilityDamageEvent

# Class: ItemComponentBeforeDurabilityDamageEvent

Contains information regarding an item before it is damaged
from hitting an entity.

## Constructors

### Constructor

> `private` **new ItemComponentBeforeDurabilityDamageEvent**(): `ItemComponentBeforeDurabilityDamageEvent`

#### Returns

`ItemComponentBeforeDurabilityDamageEvent`

## Properties

### attackingEntity

> `readonly` **attackingEntity**: [`Entity`](Entity-1.md)

#### Remarks

The attacking entity.

#### World Ready

This property can't be read in early-execution mode.

***

### durabilityDamage

> **durabilityDamage**: `number`

#### Remarks

The damage applied to the item's durability when the event
occurs.

#### World Ready

This property can't be read in early-execution mode.

***

### hitEntity

> `readonly` **hitEntity**: [`Entity`](Entity-1.md)

#### Remarks

The entity being hit.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The item stack used to hit the entity.

#### World Ready

This property can't be read in early-execution mode.

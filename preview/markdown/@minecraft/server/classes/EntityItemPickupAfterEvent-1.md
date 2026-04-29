[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemPickupAfterEvent

# Class: EntityItemPickupAfterEvent

Contains information related to an entity having picked up
items.

## Source

```ts
export class EntityItemPickupAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly items: ItemStack[];
}
```

## Constructors

### Constructor

> `private` **new EntityItemPickupAfterEvent**(): `EntityItemPickupAfterEvent`

#### Returns

`EntityItemPickupAfterEvent`

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that has picked up the items.

#### World Ready

This property can't be read in early-execution mode.

***

### items

> `readonly` **items**: [`ItemStack`](ItemStack-1.md)[]

#### Remarks

The list of items the entity has picked up.

#### World Ready

This property can't be read in early-execution mode.

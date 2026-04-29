[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityItemPickupAfterEvent

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

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that has picked up the items.

#### World Ready

This property can't be read in early-execution mode.

***

### items

> `readonly` **items**: [`ItemStack`](ItemStack.md)[]

#### Remarks

The list of items the entity has picked up.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemDropAfterEvent

# Class: EntityItemDropAfterEvent

Contains information related to an entity having dropped
items.

## Source

```ts
export class EntityItemDropAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly items: Entity[];
}
```

## Constructors

### Constructor

> `private` **new EntityItemDropAfterEvent**(): `EntityItemDropAfterEvent`

#### Returns

`EntityItemDropAfterEvent`

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that has dropped the items.

#### World Ready

This property can't be read in early-execution mode.

***

### items

> `readonly` **items**: [`Entity`](Entity-1.md)[]

#### Remarks

The list of items the entity has dropped.

#### World Ready

This property can't be read in early-execution mode.

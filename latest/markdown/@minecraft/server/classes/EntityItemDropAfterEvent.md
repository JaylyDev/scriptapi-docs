[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityItemDropAfterEvent

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

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that has dropped the items.

#### World Ready

This property can't be read in early-execution mode.

***

### items

> `readonly` **items**: [`Entity`](Entity.md)[]

#### Remarks

The list of items the entity has dropped.

#### World Ready

This property can't be read in early-execution mode.

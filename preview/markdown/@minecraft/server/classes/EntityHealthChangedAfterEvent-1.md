[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealthChangedAfterEvent

# Class: EntityHealthChangedAfterEvent

Contains information related to an entity when its health
changes. Warning: don't change the health of an entity in
this event, or it will cause an infinite loop!

## Source

```ts
export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newValue: number;
    readonly oldValue: number;
}
```

## Constructors

### Constructor

> `private` **new EntityHealthChangedAfterEvent**(): `EntityHealthChangedAfterEvent`

#### Returns

`EntityHealthChangedAfterEvent`

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

Entity whose health changed.

#### World Ready

This property can't be read in early-execution mode.

***

### newValue

> `readonly` **newValue**: `number`

#### Remarks

New health value of the entity.

#### World Ready

This property can't be read in early-execution mode.

***

### oldValue

> `readonly` **oldValue**: `number`

#### Remarks

Old health value of the entity.

#### World Ready

This property can't be read in early-execution mode.

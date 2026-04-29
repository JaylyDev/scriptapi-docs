[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityHealAfterEvent

# Class: EntityHealAfterEvent

Contains information related to an entity having been
healed.

## Source

```ts
export class EntityHealAfterEvent {
    private constructor();
    readonly healedEntity: Entity;
    readonly healing: number;
    readonly healSource: EntityHealSource;
}
```

## Constructors

### Constructor

> `private` **new EntityHealAfterEvent**(): `EntityHealAfterEvent`

#### Returns

`EntityHealAfterEvent`

## Properties

### healedEntity

> `readonly` **healedEntity**: [`Entity`](Entity.md)

#### Remarks

Entity that was healed.

#### World Ready

This property can't be read in early-execution mode.

***

### healing

> `readonly` **healing**: `number`

#### Remarks

Describes the amount of healing.

#### World Ready

This property can't be read in early-execution mode.

***

### healSource

> `readonly` **healSource**: [`EntityHealSource`](EntityHealSource.md)

#### Remarks

Information on the source of healing.

#### World Ready

This property can't be read in early-execution mode.

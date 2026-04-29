[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityRemoveBeforeEvent

# Class: EntityRemoveBeforeEvent

Data for an event that happens when an entity is being
removed from the world (for example, the entity is unloaded
because it is not close to players.)

## Source

```ts
export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntityRemoveBeforeEvent**(): `EntityRemoveBeforeEvent`

#### Returns

`EntityRemoveBeforeEvent`

## Properties

### removedEntity

> `readonly` **removedEntity**: [`Entity`](Entity-1.md)

#### Remarks

Reference to an entity that is being removed.

#### World Ready

This property can't be read in early-execution mode.

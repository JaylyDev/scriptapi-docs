[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityContainerClosedAfterEvent

# Class: EntityContainerClosedAfterEvent

**`Beta`**

Contains information regarding a specific entity container
being closed.

## Source

```ts
export class EntityContainerClosedAfterEvent {
    private constructor();
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntityContainerClosedAfterEvent**(): `EntityContainerClosedAfterEvent`

#### Returns

`EntityContainerClosedAfterEvent`

## Properties

### closeSource

> `readonly` **closeSource**: [`ContainerAccessSource`](../interfaces/ContainerAccessSource.md)

#### Remarks

The source of the entity container being closed.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

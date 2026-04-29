[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityContainerOpenedAfterEvent

# Class: EntityContainerOpenedAfterEvent

**`Beta`**

Contains information regarding a specific entity container
being opened.

## Source

```ts
export class EntityContainerOpenedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly openSource: ContainerAccessSource;
}
```

## Constructors

### Constructor

> `private` **new EntityContainerOpenedAfterEvent**(): `EntityContainerOpenedAfterEvent`

#### Returns

`EntityContainerOpenedAfterEvent`

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

***

### openSource

> `readonly` **openSource**: [`ContainerAccessSource`](../interfaces/ContainerAccessSource.md)

#### Remarks

The source of the entity container being opened.

#### World Ready

This property can't be read in early-execution mode.

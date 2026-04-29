[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityItemPickupBeforeEvent

# Class: EntityItemPickupBeforeEvent

Contains information related to an entity picking up an
item.

## Source

```ts
export class EntityItemPickupBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly entity: Entity;
    readonly item: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntityItemPickupBeforeEvent**(): `EntityItemPickupBeforeEvent`

#### Returns

`EntityItemPickupBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true the item will not be picked up.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that will pick up the item.

#### World Ready

This property can't be read in early-execution mode.

***

### item

> `readonly` **item**: [`Entity`](Entity.md)

#### Remarks

The item that will be picked up.

#### World Ready

This property can't be read in early-execution mode.

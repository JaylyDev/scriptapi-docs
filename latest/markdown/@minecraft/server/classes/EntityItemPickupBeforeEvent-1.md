[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityItemPickupBeforeEvent

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

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that will pick up the item.

#### World Ready

This property can't be read in early-execution mode.

***

### item

> `readonly` **item**: [`Entity`](Entity-1.md)

#### Remarks

The item that will be picked up.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ItemComponentHitEntityEvent

# Class: ItemComponentHitEntityEvent

Contains information regarding when an item is used to hit
an entity.

## Source

```ts
export class ItemComponentHitEntityEvent {
    private constructor();
    readonly attackingEntity: Entity;
    readonly hadEffect: boolean;
    readonly hitEntity: Entity;
    readonly itemStack?: ItemStack;
}
```

## Constructors

### Constructor

> `private` **new ItemComponentHitEntityEvent**(): `ItemComponentHitEntityEvent`

#### Returns

`ItemComponentHitEntityEvent`

## Properties

### attackingEntity

> `readonly` **attackingEntity**: [`Entity`](Entity.md)

#### Remarks

The attacking entity.

#### World Ready

This property can't be read in early-execution mode.

***

### hadEffect

> `readonly` **hadEffect**: `boolean`

#### Remarks

Whether the hit landed or had any effect.

#### World Ready

This property can't be read in early-execution mode.

***

### hitEntity

> `readonly` **hitEntity**: [`Entity`](Entity.md)

#### Remarks

The entity being hit.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack used to hit the entity.

#### World Ready

This property can't be read in early-execution mode.

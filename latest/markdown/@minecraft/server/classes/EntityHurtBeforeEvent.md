[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityHurtBeforeEvent

# Class: EntityHurtBeforeEvent

Contains information related to an entity that will be hurt.

## Source

```ts
export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntityHurtBeforeEvent**(): `EntityHurtBeforeEvent`

#### Returns

`EntityHurtBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

***

### damage

> **damage**: `number`

#### Remarks

Describes the amount of damage that will be caused.

#### World Ready

This property can't be read in early-execution mode.

***

### damageSource

> `readonly` **damageSource**: [`EntityDamageSource`](../interfaces/EntityDamageSource.md)

#### Remarks

Source information on the entity that may have applied this
damage.

#### World Ready

This property can't be read in early-execution mode.

***

### hurtEntity

> `readonly` **hurtEntity**: [`Entity`](Entity.md)

#### Remarks

Entity that will be hurt.

#### World Ready

This property can't be read in early-execution mode.

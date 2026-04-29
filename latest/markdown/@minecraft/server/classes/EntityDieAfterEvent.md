[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityDieAfterEvent

# Class: EntityDieAfterEvent

Contains data related to the death of an entity in the game.

## Source

```ts
export class EntityDieAfterEvent {
    private constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EntityDieAfterEvent**(): `EntityDieAfterEvent`

#### Returns

`EntityDieAfterEvent`

## Properties

### damageSource

> `readonly` **damageSource**: [`EntityDamageSource`](../interfaces/EntityDamageSource.md)

#### Remarks

If specified, provides more information on the source of
damage that caused the death of this entity.

#### World Ready

This property can't be read in early-execution mode.

***

### deadEntity

> `readonly` **deadEntity**: [`Entity`](Entity.md)

#### Remarks

Now-dead entity object.

#### World Ready

This property can't be read in early-execution mode.

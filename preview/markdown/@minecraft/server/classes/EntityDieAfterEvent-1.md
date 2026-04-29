[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityDieAfterEvent

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

> `readonly` **damageSource**: [`EntityDamageSource`](../interfaces/EntityDamageSource-1.md)

#### Remarks

If specified, provides more information on the source of
damage that caused the death of this entity.

#### World Ready

This property can't be read in early-execution mode.

***

### deadEntity

> `readonly` **deadEntity**: [`Entity`](Entity-1.md)

#### Remarks

Now-dead entity object.

#### World Ready

This property can't be read in early-execution mode.

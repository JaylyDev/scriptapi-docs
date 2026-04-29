[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EffectAddAfterEvent

# Class: EffectAddAfterEvent

Contains information related to changes to an effect - like
poison - being added to an entity.

## Source

```ts
export class EffectAddAfterEvent {
    private constructor();
    readonly effect: Effect;
    readonly entity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EffectAddAfterEvent**(): `EffectAddAfterEvent`

#### Returns

`EffectAddAfterEvent`

## Properties

### effect

> `readonly` **effect**: [`Effect`](Effect-1.md)

#### Remarks

Additional properties and details of the effect.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that the effect is being added to.

#### World Ready

This property can't be read in early-execution mode.

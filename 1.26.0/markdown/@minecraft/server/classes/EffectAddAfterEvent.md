[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EffectAddAfterEvent

# Class: EffectAddAfterEvent

Contains information related to changes to an effect - like
poison - being added to an entity.

## Constructors

### Constructor

> `private` **new EffectAddAfterEvent**(): `EffectAddAfterEvent`

#### Returns

`EffectAddAfterEvent`

## Properties

### effect

> `readonly` **effect**: [`Effect`](Effect.md)

#### Remarks

Additional properties and details of the effect.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

Entity that the effect is being added to.

#### World Ready

This property can't be read in early-execution mode.

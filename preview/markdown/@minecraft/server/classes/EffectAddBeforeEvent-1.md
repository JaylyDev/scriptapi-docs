[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EffectAddBeforeEvent

# Class: EffectAddBeforeEvent

Contains information related to changes to an effect - like
poison - being added to an entity.

## Source

```ts
export class EffectAddBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    readonly effectType: string;
    readonly entity: Entity;
}
```

## Constructors

### Constructor

> `private` **new EffectAddBeforeEvent**(): `EffectAddBeforeEvent`

#### Returns

`EffectAddBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

When set to true will cancel the event.

#### World Ready

This property can't be read in early-execution mode.

***

### duration

> **duration**: `number`

#### Remarks

Effect duration.

#### World Ready

This property can't be read in early-execution mode.

***

### effectType

> `readonly` **effectType**: `string`

#### Remarks

The type of the effect that is being added.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

Entity that the effect is being added to.

#### World Ready

This property can't be read in early-execution mode.

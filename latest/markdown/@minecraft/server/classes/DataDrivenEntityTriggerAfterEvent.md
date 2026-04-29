[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / DataDrivenEntityTriggerAfterEvent

# Class: DataDrivenEntityTriggerAfterEvent

Contains information related to firing of a data driven
entity event - for example, the minecraft:ageable_grow_up
event on a chicken.

## Source

```ts
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly eventId: string;
    getModifiers(): DefinitionModifier[];
}
```

## Constructors

### Constructor

> `private` **new DataDrivenEntityTriggerAfterEvent**(): `DataDrivenEntityTriggerAfterEvent`

#### Returns

`DataDrivenEntityTriggerAfterEvent`

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

Entity that the event triggered on.

#### World Ready

This property can't be read in early-execution mode.

***

### eventId

> `readonly` **eventId**: `string`

#### Remarks

Name of the data driven event being triggered.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getModifiers()

> **getModifiers**(): [`DefinitionModifier`](../interfaces/DefinitionModifier.md)[]

#### Returns

[`DefinitionModifier`](../interfaces/DefinitionModifier.md)[]

#### Remarks

An updateable list of modifications to component state that
are the effect of this triggered event.

#### World Ready

This function can't be called in early-execution mode.

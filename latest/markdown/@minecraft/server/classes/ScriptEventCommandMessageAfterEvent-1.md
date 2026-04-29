[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ScriptEventCommandMessageAfterEvent

# Class: ScriptEventCommandMessageAfterEvent

Returns additional data about a /scriptevent command
invocation.

## Source

```ts
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    readonly id: string;
    readonly initiator?: Entity;
    readonly message: string;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: ScriptEventSource;
}
```

## Constructors

### Constructor

> `private` **new ScriptEventCommandMessageAfterEvent**(): `ScriptEventCommandMessageAfterEvent`

#### Returns

`ScriptEventCommandMessageAfterEvent`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Identifier of this ScriptEvent command message.

#### World Ready

This property can't be read in early-execution mode.

***

### initiator?

> `readonly` `optional` **initiator?**: [`Entity`](Entity-1.md)

#### Remarks

If this command was initiated via an NPC, returns the entity
that initiated the NPC dialogue.

#### World Ready

This property can't be read in early-execution mode.

***

### message

> `readonly` **message**: `string`

#### Remarks

Optional additional data passed in with the script event
command.

#### World Ready

This property can't be read in early-execution mode.

***

### sourceBlock?

> `readonly` `optional` **sourceBlock?**: [`Block`](Block-1.md)

#### Remarks

Source block if this command was triggered via a block
(e.g., a commandblock.)

#### World Ready

This property can't be read in early-execution mode.

***

### sourceEntity?

> `readonly` `optional` **sourceEntity?**: [`Entity`](Entity-1.md)

#### Remarks

Source entity if this command was triggered by an entity
(e.g., a NPC).

#### World Ready

This property can't be read in early-execution mode.

***

### sourceType

> `readonly` **sourceType**: [`ScriptEventSource`](../enumerations/ScriptEventSource-1.md)

#### Remarks

Returns the type of source that fired this command.

#### World Ready

This property can't be read in early-execution mode.

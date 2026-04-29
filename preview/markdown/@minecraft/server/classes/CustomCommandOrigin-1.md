[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CustomCommandOrigin

# Class: CustomCommandOrigin

Details about the origins of the command.

## Source

```ts
export class CustomCommandOrigin {
    private constructor();
    readonly initiator?: Entity;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: CustomCommandSource;
}
```

## Constructors

### Constructor

> `private` **new CustomCommandOrigin**(): `CustomCommandOrigin`

#### Returns

`CustomCommandOrigin`

## Properties

### initiator?

> `readonly` `optional` **initiator?**: [`Entity`](Entity-1.md)

#### Remarks

If this command was initiated via an NPC, returns the entity
that initiated the NPC dialogue.

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

> `readonly` **sourceType**: [`CustomCommandSource`](../enumerations/CustomCommandSource-1.md)

#### Remarks

Returns the type of source that fired this command.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / MinecraftEditor

# Class: MinecraftEditor

The MinecraftEditor class is a namespace container for
Editor functionality which does not have any player context.

## Source

```ts
export class MinecraftEditor {
    private constructor();
    readonly afterEvents: ProjectAfterEvents;
    readonly constants: EditorConstants;
    readonly log: Logger;
    readonly simulation: SimulationState;
    readonly worldGeneratorType?: WorldGeneratorType;
}
```

## Constructors

### Constructor

> `private` **new MinecraftEditor**(): `MinecraftEditor`

#### Returns

`MinecraftEditor`

## Properties

### afterEvents

> `readonly` **afterEvents**: [`ProjectAfterEvents`](ProjectAfterEvents.md)

#### Remarks

This property can be read in early-execution mode.

***

### constants

> `readonly` **constants**: [`EditorConstants`](EditorConstants.md)

***

### log

> `readonly` **log**: [`Logger`](Logger.md)

#### Remarks

A global instance of the log output class object.  This is
not contextualized to any particular player, and any
messages sent to this instance will be broadcast to all
connected editor client sessions

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### simulation

> `readonly` **simulation**: [`SimulationState`](SimulationState.md)

#### Remarks

Allows querying and modifying some properties of the
simulation.

#### World Ready

This property can't be read in early-execution mode.

***

### worldGeneratorType?

> `readonly` `optional` **worldGeneratorType?**: [`WorldGeneratorType`](../enumerations/WorldGeneratorType.md)

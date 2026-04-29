[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / RegisteredAction

# Type Alias: RegisteredAction\<T\>

> **RegisteredAction**\<`T`\> = `T` & [`ActionID`](ActionID.md)

A registered action is an action that has been registered
with the action manager system and has a unique ID
representing the action now. An action must be registered
before it can be used in other systems.

## Type Parameters

### T

`T` *extends* [`Action`](Action.md)

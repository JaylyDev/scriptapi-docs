[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CommandResult

# Class: CommandResult

Contains return data on the result of a command execution.

## Source

```ts
export class CommandResult {
    private constructor();
    readonly successCount: number;
}
```

## Constructors

### Constructor

> `private` **new CommandResult**(): `CommandResult`

#### Returns

`CommandResult`

## Properties

### successCount

> `readonly` **successCount**: `number`

#### Remarks

If the command operates against a number of entities,
blocks, or items, this returns the number of successful
applications of this command.

#### World Ready

This property can't be read in early-execution mode.

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / CommandResult

# Class: CommandResult

Contains return data on the result of a command execution.

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

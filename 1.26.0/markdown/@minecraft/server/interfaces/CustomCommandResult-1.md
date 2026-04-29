[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / CustomCommandResult

# Interface: CustomCommandResult

Interface returned from custom command callback function.

## Properties

### message?

> `optional` **message?**: `string`

#### Remarks

Message displayed to chat after command execution.

***

### status

> **status**: [`CustomCommandStatus`](../enumerations/CustomCommandStatus-1.md)

#### Remarks

Command execution Success or Failure. Determines how the
status message is displayed.

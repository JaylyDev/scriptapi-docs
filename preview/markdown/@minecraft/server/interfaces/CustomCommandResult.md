[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / CustomCommandResult

# Interface: CustomCommandResult

Interface returned from custom command callback function.

## Source

```ts
export interface CustomCommandResult {
    message?: string;
    status: CustomCommandStatus;
}
```

## Properties

### message?

> `optional` **message?**: `string`

#### Remarks

Message displayed to chat after command execution.

***

### status

> **status**: [`CustomCommandStatus`](../enumerations/CustomCommandStatus.md)

#### Remarks

Command execution Success or Failure. Determines how the
status message is displayed.

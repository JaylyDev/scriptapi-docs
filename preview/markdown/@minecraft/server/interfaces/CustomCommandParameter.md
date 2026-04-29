[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / CustomCommandParameter

# Interface: CustomCommandParameter

Definition for each parameter expected by the custom
command.

## Source

```ts
export interface CustomCommandParameter {
    name: string;
    type: CustomCommandParamType;
}
```

## Properties

### name

> **name**: `string`

#### Remarks

The name of parameter as it appears on the command line.

***

### type

> **type**: [`CustomCommandParamType`](../enumerations/CustomCommandParamType.md)

#### Remarks

The data type of the parameter.

[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / CustomCommandParameter

# Interface: CustomCommandParameter

Definition for each parameter expected by the custom
command.

## Source

```ts
export interface CustomCommandParameter {
    enumName?: string;
    name: string;
    type: CustomCommandParamType;
}
```

## Properties

### enumName?

> `optional` **enumName?**: `string`

**`Beta`**

#### Remarks

Can be used to reference the enum name when [CustomCommandParamType](../enumerations/CustomCommandParamType-1.md) is 'Enum'. Allows the parameter name
to be different from the enum name.

***

### name

> **name**: `string`

#### Remarks

The name of parameter as it appears on the command line.

***

### type

> **type**: [`CustomCommandParamType`](../enumerations/CustomCommandParamType-1.md)

#### Remarks

The data type of the parameter.

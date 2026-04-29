[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / CustomComponentParameters

# Class: CustomComponentParameters

Contains the custom component's JSON parameters

## Source

```ts
export class CustomComponentParameters {
    private constructor();
    readonly params: unknown;
}
```

## Constructors

### Constructor

> `private` **new CustomComponentParameters**(): `CustomComponentParameters`

#### Returns

`CustomComponentParameters`

## Properties

### params

> `readonly` **params**: `unknown`

#### Remarks

JSON object containing the parameters from the custom
component definition

#### World Ready

This property can't be read in early-execution mode.

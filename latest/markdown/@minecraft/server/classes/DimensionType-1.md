[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / DimensionType

# Class: DimensionType

Represents a type of dimension.

## Source

```ts
export class DimensionType {
    private constructor();
    readonly typeId: string;
}
```

## Constructors

### Constructor

> `private` **new DimensionType**(): `DimensionType`

#### Returns

`DimensionType`

## Properties

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the dimension type.

#### World Ready

This property can't be read in early-execution mode.

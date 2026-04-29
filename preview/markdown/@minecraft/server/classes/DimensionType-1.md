[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / DimensionType

# Class: DimensionType

Represents a type of dimension. Currently only works with
Vanilla dimensions.

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

Identifier of the dimension type. Currently only works with
Vanilla dimensions.

#### World Ready

This property can't be read in early-execution mode.

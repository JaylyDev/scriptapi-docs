[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / FluidContainer

# Class: FluidContainer

Represents constants related to fluid containers.

## Source

```ts
export class FluidContainer {
    private constructor();
    static readonly maxFillLevel = 6;
    static readonly minFillLevel = 0;
}
```

## Constructors

### Constructor

> `private` **new FluidContainer**(): `FluidContainer`

#### Returns

`FluidContainer`

## Properties

### maxFillLevel

> `readonly` `static` **maxFillLevel**: `6` = `6`

#### Remarks

Constant that represents the maximum fill level of a fluid
container.

#### World Ready

This property can't be read in early-execution mode.

***

### minFillLevel

> `readonly` `static` **minFillLevel**: `0` = `0`

#### Remarks

Constant that represents the minimum fill level of a fluid
container.

#### World Ready

This property can't be read in early-execution mode.

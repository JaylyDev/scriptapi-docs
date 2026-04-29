[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / CatmullRomSpline

# Class: CatmullRomSpline

CatmullRom spline creation.

## Source

```ts
export class CatmullRomSpline {
    controlPoints: Vector3[];
}
```

## Constructors

### Constructor

> **new CatmullRomSpline**(): `CatmullRomSpline`

#### Returns

`CatmullRomSpline`

## Properties

### controlPoints

> **controlPoints**: [`Vector3`](../interfaces/Vector3.md)[]

#### Remarks

Control points for the CatmullRom curve.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

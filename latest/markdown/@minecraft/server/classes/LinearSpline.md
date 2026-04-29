[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / LinearSpline

# Class: LinearSpline

A spline that linearly interpolates between points.

## Source

```ts
export class LinearSpline {
    controlPoints: Vector3[];
}
```

## Constructors

### Constructor

> **new LinearSpline**(): `LinearSpline`

#### Returns

`LinearSpline`

## Properties

### controlPoints

> **controlPoints**: [`Vector3`](../interfaces/Vector3.md)[]

#### Remarks

Control points for the Linear spline.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

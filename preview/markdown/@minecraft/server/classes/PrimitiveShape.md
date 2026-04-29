[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PrimitiveShape

# Class: PrimitiveShape

**`Beta`**

The base class for a text primitive. Represents an object in
the world and its base properties.

## Source

```ts
export class PrimitiveShape {
    private constructor();
    attachedTo?: Entity;
    color: RGBA;
    readonly dimension: Dimension;
    readonly hasDuration: boolean;
    readonly location: Vector3;
    maximumRenderDistance?: number;
    rotation: Vector3;
    scale: number;
    timeLeft?: number;
    readonly totalTimeLeft?: number;
    visibleTo: Player[];
    remove(): void;
    setLocation(location: DimensionLocation | Vector3): void;
}
```

## Extended by

- [`TextPrimitive`](TextPrimitive.md)

## Constructors

### Constructor

> `private` **new PrimitiveShape**(): `PrimitiveShape`

#### Returns

`PrimitiveShape`

## Properties

### attachedTo?

> `optional` **attachedTo?**: [`Entity`](Entity-1.md)

#### Remarks

The entity this shape is attached to. When set, this shape
will copy the root location of the attached entity and the
shape's position will be used as an offset.

#### World Ready

This property can't be read in early-execution mode.

***

### color

> **color**: [`RGBA`](../interfaces/RGBA-1.md)

#### Remarks

The color of the shape.

#### World Ready

This property can't be read in early-execution mode.

***

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

The dimension the shape is visible within. If the dimension
is undefined, it will display in all dimensions.

#### World Ready

This property can't be read in early-execution mode.

***

### hasDuration

> `readonly` **hasDuration**: `boolean`

#### Remarks

Returns true if the shape has a limited time span before
being removed.

#### World Ready

This property can't be read in early-execution mode.

***

### location

> `readonly` **location**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

The location of the shape.

#### World Ready

This property can't be read in early-execution mode.

***

### maximumRenderDistance?

> `optional` **maximumRenderDistance?**: `number`

#### Remarks

If defined, this distance will be used to determine how far
away this primitive will be rendered for each client. By
default the distance will match the client's render distance
setting.

Minimum Value: 0

#### World Ready

This property can't be read in early-execution mode.

***

### rotation

> **rotation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

The rotation of the shape (Euler angles - [Pitch, Yaw,
Roll]).

#### World Ready

This property can't be read in early-execution mode.

***

### scale

> **scale**: `number`

#### Remarks

The scale of the shape.

Bounds: [-1000, 1000]

#### World Ready

This property can't be read in early-execution mode.

***

### timeLeft?

> `optional` **timeLeft?**: `number`

#### Remarks

The time left (in seconds) until this shape is automatically
removed. Returns undefined if the shape does not have a
limited life-span.

#### World Ready

This property can't be read in early-execution mode.

***

### totalTimeLeft?

> `readonly` `optional` **totalTimeLeft?**: `number`

#### Remarks

The total initial time-span (in seconds) until this shape is
automatically removed. Returns undefined if the shape does
not have a limited life-span.

#### World Ready

This property can't be read in early-execution mode.

***

### visibleTo

> **visibleTo**: [`Player`](Player-1.md)[]

#### Remarks

The list of players that this shape will be visible to. If
left empty, the shape will be visible to all players.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### remove()

> **remove**(): `void`

#### Returns

`void`

#### Remarks

Removes this shape from the world. The shape can be re-added
via the PrimitiveShapesManager's addText method.

#### World Ready

This function can't be called in early-execution mode.

***

### setLocation()

> **setLocation**(`location`): `void`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md) \| [`DimensionLocation`](../interfaces/DimensionLocation-1.md)

#### Returns

`void`

#### Remarks

Set the location and dimension of the shape. If the
dimension is undefined, it will display in all dimensions.

#### World Ready

This function can't be called in early-execution mode.

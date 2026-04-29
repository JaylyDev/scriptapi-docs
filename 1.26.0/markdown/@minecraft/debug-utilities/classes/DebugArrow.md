[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/debug-utilities](../README.md) / DebugArrow

# Class: DebugArrow

The length of the arrow's head/tip.

## Extends

- [`DebugLine`](DebugLine.md)

## Constructors

### Constructor

> **new DebugArrow**(`location`, `endLocation`): `DebugArrow`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md) \| [`DimensionLocation`](../../server/interfaces/DimensionLocation.md)

##### endLocation

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`DebugArrow`

#### Overrides

[`DebugLine`](DebugLine.md).[`constructor`](DebugLine.md#constructor)

## Properties

### attachedTo?

> `optional` **attachedTo?**: [`Entity`](../../server/classes/Entity.md)

#### Remarks

The entity this shape is attached to. When set, this shape
will copy the root location of the attached entity and the
shape's position will be used as an offset.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`attachedTo`](DebugLine.md#attachedto)

***

### color

> **color**: [`RGB`](../../server/interfaces/RGB.md)

#### Remarks

The color of the shape.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`color`](DebugLine.md#color)

***

### dimension

> `readonly` **dimension**: [`Dimension`](../../server/classes/Dimension.md)

#### Remarks

The dimension the shape is visible within. If the dimension
is undefined, it will display in all dimensions.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`dimension`](DebugLine.md#dimension)

***

### endLocation

> **endLocation**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

The end location of the line segment. The final line will
spawn between location and endLocation.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`endLocation`](DebugLine.md#endlocation)

***

### hasDuration

> `readonly` **hasDuration**: `boolean`

#### Remarks

Returns true if the shape has a limited time span before
being removed.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`hasDuration`](DebugLine.md#hasduration)

***

### headLength

> **headLength**: `number`

#### Remarks

Adds a new debug shape to the world.

#### World Ready

This property can't be read in early-execution mode.

***

### headRadius

> **headRadius**: `number`

#### Remarks

The radius of the arrow's head/tip.

#### World Ready

This property can't be read in early-execution mode.

***

### headSegments

> **headSegments**: `number`

#### Remarks

The number of segments for the base circle of the arrow's
head/tip (default: 4).

#### World Ready

This property can't be read in early-execution mode.

***

### location

> `readonly` **location**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

The location of the shape. For most shapes the location is
the centre of the shape, except DebugLine and DebugArrow
where this represents the start point of the line.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`location`](DebugLine.md#location)

***

### rotation

> **rotation**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

The rotation of the shape (Euler angles - [Pitch, Yaw,
Roll]).

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`rotation`](DebugLine.md#rotation)

***

### scale

> **scale**: `number`

#### Remarks

The scale of the shape. This does not apply to DebugLine or
DebugArrow.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`scale`](DebugLine.md#scale)

***

### timeLeft?

> `optional` **timeLeft?**: `number`

#### Remarks

The time left (in seconds) until this shape is automatically
removed. Returns undefined if the shape does not have a
limited life-span.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`timeLeft`](DebugLine.md#timeleft)

***

### totalTimeLeft?

> `readonly` `optional` **totalTimeLeft?**: `number`

#### Remarks

The total initial time-span (in seconds) until this shape is
automatically removed. Returns undefined if the shape does
not have a limited life-span.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`totalTimeLeft`](DebugLine.md#totaltimeleft)

***

### visibleTo

> **visibleTo**: [`Player`](../../server/classes/Player.md)[]

#### Remarks

The list of players that this shape will be visible to. If
left empty, the shape will be visible to all players.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`visibleTo`](DebugLine.md#visibleto)

## Methods

### remove()

> **remove**(): `void`

#### Returns

`void`

#### Remarks

Removes this shape from the world. The shape can be re-added
via the DebugDrawer's addShape method.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`remove`](DebugLine.md#remove)

***

### setLocation()

> **setLocation**(`location`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md) \| [`DimensionLocation`](../../server/interfaces/DimensionLocation.md)

#### Returns

`void`

#### Remarks

Set the location and dimension of the shape. If the
dimension is undefined, it will display in all dimensions.
For most shapes the location is the centre of the shape,
except DebugLine and DebugArrow where this represents the
start point of the line.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`DebugLine`](DebugLine.md).[`setLocation`](DebugLine.md#setlocation)

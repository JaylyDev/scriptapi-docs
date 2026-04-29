[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/debug-utilities](../README.md) / DebugDrawer

# Class: DebugDrawer

Debug Drawing class used to allow adding and removing
wireframe shapes in world space.

## Constructors

### Constructor

> `private` **new DebugDrawer**(): `DebugDrawer`

#### Returns

`DebugDrawer`

## Methods

### addShape()

> **addShape**(`shape`, `dimension?`): `void`

#### Parameters

##### shape

[`DebugShape`](DebugShape.md)

The debug shape to be added. Should be of type DebugBox,
DebugLine, DebugCircle, DebugSphere, DebugArrow or
DebugText.

##### dimension?

[`Dimension`](../../server/classes/Dimension.md)

#### Returns

`void`

#### Remarks

Adds a new debug shape to the world.

#### World Ready

This function can't be called in early-execution mode.

***

### removeAll()

> **removeAll**(): `void`

#### Returns

`void`

#### Remarks

Removes all debug shapes from the world.

#### World Ready

This function can't be called in early-execution mode.

***

### removeShape()

> **removeShape**(`shape`): `void`

#### Parameters

##### shape

[`DebugShape`](DebugShape.md)

#### Returns

`void`

#### Remarks

Removes an instance of a debug shape from the world. This is
equivalent to calling remove on the shape itself.

#### World Ready

This function can't be called in early-execution mode.

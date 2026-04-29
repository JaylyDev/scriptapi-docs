[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/debug-utilities](../README.md) / DebugText

# Class: DebugText

A debug shape class that represents a text label in the
world with a background.

## Source

```ts
export class DebugText extends DebugShape {
    backfaceVisible: boolean;
    backgroundColorOverride?: minecraftserver.RGBA;
    depthTest: boolean;
    readonly text: minecraftserver.RawMessage | string;
    textBackfaceVisible: boolean;
    useRotation: boolean;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        text: minecraftserver.RawMessage | string,
    );
    setText(text: minecraftserver.RawMessage | string): void;
}
```

## Extends

- [`DebugShape`](DebugShape.md)

## Constructors

### Constructor

> **new DebugText**(`location`, `text`): `DebugText`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md) \| [`DimensionLocation`](../../server/interfaces/DimensionLocation.md)

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`DebugText`

#### Overrides

[`DebugShape`](DebugShape.md).[`constructor`](DebugShape.md#constructor)

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

[`DebugShape`](DebugShape.md).[`attachedTo`](DebugShape.md#attachedto)

***

### backfaceVisible

> **backfaceVisible**: `boolean`

#### Remarks

If set to true, the debug text will render the back-face of
the background. Defaults to true but will always be false if
'useRotation' is set to false.

#### World Ready

This property can't be read in early-execution mode.

***

### backgroundColorOverride?

> `optional` **backgroundColorOverride?**: [`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

The color of the background plate of the text. If set to
undefined, it will use the default color.

#### World Ready

This property can't be read in early-execution mode.

***

### color

> **color**: [`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

The color of the shape.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`color`](DebugShape.md#color)

***

### depthTest

> **depthTest**: `boolean`

#### Remarks

If set to true, the text will be hidden behind blocks or
entities. By default this is set to false (will always
render).

#### World Ready

This property can't be read in early-execution mode.

***

### dimension

> `readonly` **dimension**: [`Dimension`](../../server/classes/Dimension.md)

#### Remarks

The dimension the shape is visible within. If the dimension
is undefined, it will display in all dimensions.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`dimension`](DebugShape.md#dimension)

***

### hasDuration

> `readonly` **hasDuration**: `boolean`

#### Remarks

Returns true if the shape has a limited time span before
being removed.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`hasDuration`](DebugShape.md#hasduration)

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

[`DebugShape`](DebugShape.md).[`location`](DebugShape.md#location)

***

### maximumRenderDistance?

> `optional` **maximumRenderDistance?**: `number`

#### Remarks

If defined, this distance will be used to determine how far
away this shape will be rendered for each client. By default
the distance will match the client's render distance
setting.

Minimum Value: 0

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`maximumRenderDistance`](DebugShape.md#maximumrenderdistance)

***

### rotation

> **rotation**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

The rotation of the shape (Euler angles - [Pitch, Yaw,
Roll]).

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`rotation`](DebugShape.md#rotation)

***

### scale

> **scale**: `number`

#### Remarks

The scale of the shape. This does not apply to DebugLine or
DebugArrow.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`scale`](DebugShape.md#scale)

***

### text

> `readonly` **text**: `string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Remarks

Get the text of the debug text shape. Returns the RawText of
the debug text if `setText` was called with a RawMessage or
a RawText object, otherwise returns a string.

#### World Ready

This property can't be read in early-execution mode.

***

### textBackfaceVisible

> **textBackfaceVisible**: `boolean`

#### Remarks

If set to true, the debug text will render the back-face of
the text. Defaults to true but will always be false if
'useRotation' is set to false.

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

#### Inherited from

[`DebugShape`](DebugShape.md).[`timeLeft`](DebugShape.md#timeleft)

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

[`DebugShape`](DebugShape.md).[`totalTimeLeft`](DebugShape.md#totaltimeleft)

***

### useRotation

> **useRotation**: `boolean`

#### Remarks

If set to true, the text will not face the camera and
instead will use the rotation from the shape.

#### World Ready

This property can't be read in early-execution mode.

***

### visibleTo

> **visibleTo**: [`Player`](../../server/classes/Player.md)[]

#### Remarks

The list of players that this shape will be visible to. If
left empty, the shape will be visible to all players.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`DebugShape`](DebugShape.md).[`visibleTo`](DebugShape.md#visibleto)

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

[`DebugShape`](DebugShape.md).[`remove`](DebugShape.md#remove)

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

[`DebugShape`](DebugShape.md).[`setLocation`](DebugShape.md#setlocation)

***

### setText()

> **setText**(`text`): `void`

#### Parameters

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`void`

#### Remarks

Sets the text to display.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[minecraftserver.RawMessageError](../../server/classes/RawMessageError.md)

#### World Ready

This function can't be called in early-execution mode.

[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / TextPrimitive

# Class: TextPrimitive

**`Beta`**

A primitive shape class that represents a text label in the
world with a background.

## Source

```ts
export class TextPrimitive extends PrimitiveShape {
    backfaceVisible: boolean;
    backgroundColorOverride?: RGBA;
    depthTest: boolean;
    readonly text: RawMessage | string;
    textBackfaceVisible: boolean;
    useRotation: boolean;
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    setText(text: RawMessage | string): void;
}
```

## Extends

- [`PrimitiveShape`](PrimitiveShape.md)

## Constructors

### Constructor

> **new TextPrimitive**(`location`, `text`): `TextPrimitive`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md) \| [`DimensionLocation`](../interfaces/DimensionLocation-1.md)

##### text

`string` \| [`RawMessage`](../interfaces/RawMessage-1.md)

#### Returns

`TextPrimitive`

#### Overrides

[`PrimitiveShape`](PrimitiveShape.md).[`constructor`](PrimitiveShape.md#constructor)

## Properties

### attachedTo?

> `optional` **attachedTo?**: [`Entity`](Entity-1.md)

#### Remarks

The entity this shape is attached to. When set, this shape
will copy the root location of the attached entity and the
shape's position will be used as an offset.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`attachedTo`](PrimitiveShape.md#attachedto)

***

### backfaceVisible

> **backfaceVisible**: `boolean`

#### Remarks

If set to true, the text primitive will render the back-face
of the background. Defaults to true but will always be false
if 'useRotation' is set to false.

#### World Ready

This property can't be read in early-execution mode.

***

### backgroundColorOverride?

> `optional` **backgroundColorOverride?**: [`RGBA`](../interfaces/RGBA-1.md)

#### Remarks

The color of the background plate of the text. If set to
undefined, it will use the default color.

#### World Ready

This property can't be read in early-execution mode.

***

### color

> **color**: [`RGBA`](../interfaces/RGBA-1.md)

#### Remarks

The color of the shape.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`color`](PrimitiveShape.md#color)

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

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

The dimension the shape is visible within. If the dimension
is undefined, it will display in all dimensions.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`dimension`](PrimitiveShape.md#dimension)

***

### hasDuration

> `readonly` **hasDuration**: `boolean`

#### Remarks

Returns true if the shape has a limited time span before
being removed.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`hasDuration`](PrimitiveShape.md#hasduration)

***

### location

> `readonly` **location**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

The location of the shape.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`location`](PrimitiveShape.md#location)

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

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`maximumRenderDistance`](PrimitiveShape.md#maximumrenderdistance)

***

### rotation

> **rotation**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

The rotation of the shape (Euler angles - [Pitch, Yaw,
Roll]).

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`rotation`](PrimitiveShape.md#rotation)

***

### scale

> **scale**: `number`

#### Remarks

The scale of the shape.

Bounds: [-1000, 1000]

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`scale`](PrimitiveShape.md#scale)

***

### text

> `readonly` **text**: `string` \| [`RawMessage`](../interfaces/RawMessage-1.md)

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

If set to true, the text primitive will render the back-face
of the text. Defaults to true but will always be false if
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

[`PrimitiveShape`](PrimitiveShape.md).[`timeLeft`](PrimitiveShape.md#timeleft)

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

[`PrimitiveShape`](PrimitiveShape.md).[`totalTimeLeft`](PrimitiveShape.md#totaltimeleft)

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

> **visibleTo**: [`Player`](Player-1.md)[]

#### Remarks

The list of players that this shape will be visible to. If
left empty, the shape will be visible to all players.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`visibleTo`](PrimitiveShape.md#visibleto)

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

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`remove`](PrimitiveShape.md#remove)

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

#### Inherited from

[`PrimitiveShape`](PrimitiveShape.md).[`setLocation`](PrimitiveShape.md#setlocation)

***

### setText()

> **setText**(`text`): `void`

#### Parameters

##### text

`string` \| [`RawMessage`](../interfaces/RawMessage-1.md)

#### Returns

`void`

#### Remarks

Sets the text to display.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[RawMessageError](RawMessageError-1.md)

#### World Ready

This function can't be called in early-execution mode.

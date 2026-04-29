[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / Cursor

# Class: Cursor

The 3D block cursor is controlled through this read only
object and provides the Editor some control over the input
methods, display properties and positioning of the 3D block
cursor within the world.
The 3D block cursor is a native object which is constantly
calculating a screen/mouse -> world raycast, and recording
the resultant block collision position and facing direction.
Depending on the properties of the cursor state, this is not
always true – the cursor can also be manually manipulated by
keyboard input and moved around independently of mouse
movement; when the mouse is moved, the block cursor will
return to the mouse/world ray intersection point.
The cursor can also be set to either block or face mode;
block mode represents the block the mouse is pointing at,
and face mode represents the adjacent block that the mouse
is pointing at (i.e. the block attached to the face of the
intersection point).
In practical use, each tool when activated grabs the current
cursor state object and stores it.  The active tool then
sets the current state to represent the functionality of the
tool (color, input mode, etc).  When the tool loses focus,
it restores the cursor state using the stored state object
that was grabbed during activation.
The 3D block cursor can also be used to query the current
block at which the mouse is pointing (or the current block
to which the cursor has been manually moved by the user)

## Constructors

### Constructor

> `private` **new Cursor**(): `Cursor`

#### Returns

`Cursor`

## Properties

### faceDirection

> `readonly` **faceDirection**: `number`

#### Remarks

The face at of the block beneath the 3D block cursor which
is intersected by the mouse raycast

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isVisible

> `readonly` **isVisible**: `boolean`

#### Remarks

Query whether or not the 3D block cursor is visible or
hidden

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### maxViewBlockDistance

> `readonly` **maxViewBlockDistance**: `number`

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getDefaultProperties()

> **getDefaultProperties**(): [`CursorProperties`](../interfaces/CursorProperties.md)

#### Returns

[`CursorProperties`](../interfaces/CursorProperties.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getPosition()

> **getPosition**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

Get the world position of the 3D block cursor

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getProperties()

> **getProperties**(): [`CursorProperties`](../interfaces/CursorProperties.md)

#### Returns

[`CursorProperties`](../interfaces/CursorProperties.md)

#### Remarks

Get a property object which represents the current
properties of the 3D block cursor.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getRay()

> **getRay**(): [`CursorRay`](../interfaces/CursorRay.md)

#### Returns

[`CursorRay`](../interfaces/CursorRay.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the 3D block cursor from view until the corresponding
[Cursor.show](#show) function is called

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### moveBy()

> **moveBy**(`offset`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### offset

[`Vector3`](../../server/interfaces/Vector3.md)

Amount by which the 3D block cursor should be moved

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

Return the newly modified position (or previous position if
movement was restricted)

#### Remarks

Manually offset the 3D block cursor by given amount.
Depending on the [CursorProperties.controlMode](../interfaces/CursorProperties.md#controlmode) - this
function may have no effect

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### popPropertiesById()

> **popPropertiesById**(`identifier`): `void`

#### Parameters

##### identifier

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### pushPropertiesById()

> **pushPropertiesById**(`properties`, `identifier`): `void`

#### Parameters

##### properties

[`CursorProperties`](../interfaces/CursorProperties.md)

##### identifier

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### resetToDefaultState()

> **resetToDefaultState**(): `void`

#### Returns

`void`

#### Remarks

Reset the 3D block cursor to the system default state

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setProperties()

> **setProperties**(`properties`): `void`

#### Parameters

##### properties

[`CursorProperties`](../interfaces/CursorProperties.md)

A set of optional parameters within a property state which
represent the intended 3D block cursor state

#### Returns

`void`

#### Remarks

Set the 3D block cursor properties to a given state

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Make the 3D block cursor visible on screen

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### updatePropertiesById()

> **updatePropertiesById**(`properties`, `identifier?`): `void`

#### Parameters

##### properties

[`CursorProperties`](../interfaces/CursorProperties.md)

##### identifier?

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

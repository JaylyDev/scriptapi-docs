[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/math](../README.md) / Vector3Utils

# Class: Vector3Utils

Utilities operating on Vector3 objects. All methods are static and do not modify the input objects.

## Constructors

### Constructor

> **new Vector3Utils**(): `Vector3Utils`

#### Returns

`Vector3Utils`

## Methods

### add()

> `static` **add**(`v1`, `v2`): [`Vector3`](../../server/interfaces/Vector3.md)

add

Add two vectors to produce a new vector

#### Parameters

##### v1

[`Vector3`](../../server/interfaces/Vector3.md)

##### v2

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### ceil()

> `static` **ceil**(`v`): [`Vector3`](../../server/interfaces/Vector3.md)

ceil

Ceil the components of a vector to produce a new vector

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### clamp()

> `static` **clamp**(`v`, `limits?`): [`Vector3`](../../server/interfaces/Vector3.md)

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

##### limits?

###### max?

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

###### min?

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### cross()

> `static` **cross**(`a`, `b`): [`Vector3`](../../server/interfaces/Vector3.md)

cross

Calculate the cross product of two vectors. Returns a new vector.

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### distance()

> `static` **distance**(`a`, `b`): `number`

distance

Calculate the distance between two vectors

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`number`

***

### dot()

> `static` **dot**(`a`, `b`): `number`

dot

Calculate the dot product of two vectors

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`number`

***

### equals()

> `static` **equals**(`v1`, `v2`): `boolean`

equals

Check the equality of two vectors

#### Parameters

##### v1

[`Vector3`](../../server/interfaces/Vector3.md)

##### v2

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

***

### floor()

> `static` **floor**(`v`): [`Vector3`](../../server/interfaces/Vector3.md)

floor

Floor the components of a vector to produce a new vector

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### fromString()

> `static` **fromString**(`str`, `delimiter?`): [`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`

fromString

Gets a Vector3 from the string representation produced by [Vector3Utils.toString](#tostring). If any numeric value is not a number
or the format is invalid, undefined is returned.

#### Parameters

##### str

`string`

The string to parse

##### delimiter?

`string`

The delimiter used to separate the components. Defaults to the same as the default for [Vector3Utils.toString](#tostring)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md) \| `undefined`

***

### lerp()

> `static` **lerp**(`a`, `b`, `t`): [`Vector3`](../../server/interfaces/Vector3.md)

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

##### t

`number`

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### magnitude()

> `static` **magnitude**(`v`): `number`

magnitude

The magnitude of a vector

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`number`

***

### max()

> `static` **max**(`a`, `b`): [`Vector3`](../../server/interfaces/Vector3.md)

max

Max the components of two vectors to produce a new vector

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### min()

> `static` **min**(`a`, `b`): [`Vector3`](../../server/interfaces/Vector3.md)

min

Min the components of two vectors to produce a new vector

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### multiply()

> `static` **multiply**(`a`, `b`): [`Vector3`](../../server/interfaces/Vector3.md)

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [Vector3Utils.dot](#dot) product or [Vector3Utils.cross](#cross) product

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### normalize()

> `static` **normalize**(`v`): [`Vector3`](../../server/interfaces/Vector3.md)

normalize

Takes a vector 3 and normalizes it to a unit vector

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### rotateX()

> `static` **rotateX**(`v`, `a`): [`Vector3`](../../server/interfaces/Vector3.md)

rotateX

Rotates the vector around the x axis counterclockwise (left hand rule)

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

##### a

`number`

Angle in radians

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### rotateY()

> `static` **rotateY**(`v`, `a`): [`Vector3`](../../server/interfaces/Vector3.md)

rotateY

Rotates the vector around the y axis counterclockwise (left hand rule)

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

##### a

`number`

Angle in radians

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### rotateZ()

> `static` **rotateZ**(`v`, `a`): [`Vector3`](../../server/interfaces/Vector3.md)

rotateZ

Rotates the vector around the z axis counterclockwise (left hand rule)

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

##### a

`number`

Angle in radians

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### scale()

> `static` **scale**(`v1`, `scale`): [`Vector3`](../../server/interfaces/Vector3.md)

scale

Multiple all entries in a vector by a single scalar value producing a new vector

#### Parameters

##### v1

[`Vector3`](../../server/interfaces/Vector3.md)

##### scale

`number`

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### slerp()

> `static` **slerp**(`a`, `b`, `t`): [`Vector3`](../../server/interfaces/Vector3.md)

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

##### a

[`Vector3`](../../server/interfaces/Vector3.md)

##### b

[`Vector3`](../../server/interfaces/Vector3.md)

##### t

`number`

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### subtract()

> `static` **subtract**(`v1`, `v2`): [`Vector3`](../../server/interfaces/Vector3.md)

subtract

Subtract two vectors to produce a new vector (v1-v2)

#### Parameters

##### v1

[`Vector3`](../../server/interfaces/Vector3.md)

##### v2

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

***

### toString()

> `static` **toString**(`v`, `options?`): `string`

toString

Create a string representation of a vector3

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

###### decimals?

`number`

###### delimiter?

`string`

#### Returns

`string`

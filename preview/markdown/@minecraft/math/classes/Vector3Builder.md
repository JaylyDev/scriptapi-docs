[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/math](../README.md) / Vector3Builder

# Class: Vector3Builder

Vector3 wrapper class which can be used as a Vector3 for APIs on @minecraft/server which require a Vector,
but also contain additional helper methods. This is an alternative to using the core Vector 3 utility
methods directly, for those who prefer a more object-oriented approach. This version of the class is mutable
and changes state inline.

For an immutable version of the build, use ImmutableVector3Builder.

## Implements

- [`Vector3`](../../server/interfaces/Vector3.md)

## Constructors

### Constructor

> **new Vector3Builder**(`vecStr`, `delim?`, `arg2?`): `Vector3Builder`

#### Parameters

##### vecStr

`string`

##### delim?

`string`

##### arg2?

`undefined`

#### Returns

`Vector3Builder`

### Constructor

> **new Vector3Builder**(`vec`, `arg?`, `arg2?`): `Vector3Builder`

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

##### arg?

`undefined`

##### arg2?

`undefined`

#### Returns

`Vector3Builder`

### Constructor

> **new Vector3Builder**(`x`, `y`, `z`): `Vector3Builder`

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`Vector3Builder`

## Properties

### x

> **x**: `number`

#### Remarks

X component of this vector.

#### Implementation of

[`Vector3`](../../server/interfaces/Vector3.md).[`x`](../../server/interfaces/Vector3.md#x)

***

### y

> **y**: `number`

#### Remarks

Y component of this vector.

#### Implementation of

[`Vector3`](../../server/interfaces/Vector3.md).[`y`](../../server/interfaces/Vector3.md#y)

***

### z

> **z**: `number`

#### Remarks

Z component of this vector.

#### Implementation of

[`Vector3`](../../server/interfaces/Vector3.md).[`z`](../../server/interfaces/Vector3.md#z)

## Methods

### add()

> **add**(`v`): `this`

add

Adds the vector v to this, returning itself.

#### Parameters

##### v

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

`this`

***

### assign()

> **assign**(`vec`): `this`

Assigns the values of the passed in vector to this vector. Returns itself.

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`this`

***

### ceil()

> **ceil**(): `this`

ceil

Ceil the components of a vector to produce a new vector

#### Returns

`this`

***

### clamp()

> **clamp**(`limits`): `this`

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

##### limits

###### max?

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

###### min?

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

`this`

***

### cross()

> **cross**(`vec`): `this`

cross

Computes the cross product of this and the passed in vector, returning itself.

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`this`

***

### distance()

> **distance**(`vec`): `number`

distance

Calculate the distance between two vectors

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`number`

***

### dot()

> **dot**(`vec`): `number`

dot

Computes the dot product of this and the passed in vector.

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`number`

***

### equals()

> **equals**(`v`): `boolean`

equals

Check the equality of two vectors

#### Parameters

##### v

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

***

### floor()

> **floor**(): `this`

floor

Floor the components of a vector to produce a new vector

#### Returns

`this`

***

### lerp()

> **lerp**(`vec`, `t`): `this`

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

##### t

`number`

#### Returns

`this`

***

### magnitude()

> **magnitude**(): `number`

magnitude

The magnitude of the vector

#### Returns

`number`

***

### max()

> **max**(`vec`): `this`

max

Max the components of two vectors to produce a new vector

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`this`

***

### min()

> **min**(`vec`): `this`

min

Min the components of two vectors to produce a new vector

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`this`

***

### multiply()

> **multiply**(`vec`): `this`

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [Vector3Builder.dot](#dot) product or [Vector3Builder.cross](#cross) product

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`this`

***

### normalize()

> **normalize**(): `this`

normalize

Normalizes this vector, returning itself.

#### Returns

`this`

***

### rotateX()

> **rotateX**(`a`): `this`

rotateX

Rotates the vector around the x axis counterclockwise (left hand rule)

#### Parameters

##### a

`number`

Angle in radians

#### Returns

`this`

***

### rotateY()

> **rotateY**(`a`): `this`

rotateY

Rotates the vector around the y axis counterclockwise (left hand rule)

#### Parameters

##### a

`number`

Angle in radians

#### Returns

`this`

***

### rotateZ()

> **rotateZ**(`a`): `this`

rotateZ

Rotates the vector around the z axis counterclockwise (left hand rule)

#### Parameters

##### a

`number`

Angle in radians

#### Returns

`this`

***

### scale()

> **scale**(`val`): `this`

scale

Scales this by the passed in value, returning itself.

#### Parameters

##### val

`number`

#### Returns

`this`

***

### slerp()

> **slerp**(`vec`, `t`): `this`

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

##### vec

[`Vector3`](../../server/interfaces/Vector3.md)

##### t

`number`

#### Returns

`this`

***

### subtract()

> **subtract**(`v`): `this`

subtract

Subtracts the vector v from this, returning itself.

#### Parameters

##### v

`Partial`\<[`Vector3`](../../server/interfaces/Vector3.md)\>

#### Returns

`this`

***

### toString()

> **toString**(`options?`): `string`

toString

Create a string representation of a vector

#### Parameters

##### options?

###### decimals?

`number`

###### delimiter?

`string`

#### Returns

`string`

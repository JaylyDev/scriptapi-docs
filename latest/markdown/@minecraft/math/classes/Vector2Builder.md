[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/math](../README.md) / Vector2Builder

# Class: Vector2Builder

Vector2 wrapper class which can be used as a Vector2 for APIs on @minecraft/server which require a Vector2.

## Implements

- [`Vector2`](../../server/interfaces/Vector2.md)

## Constructors

### Constructor

> **new Vector2Builder**(`vecStr`, `delim?`): `Vector2Builder`

#### Parameters

##### vecStr

`string`

##### delim?

`string`

#### Returns

`Vector2Builder`

### Constructor

> **new Vector2Builder**(`vec`, `arg?`): `Vector2Builder`

#### Parameters

##### vec

[`Vector2`](../../server/interfaces/Vector2.md)

##### arg?

`undefined`

#### Returns

`Vector2Builder`

### Constructor

> **new Vector2Builder**(`x`, `y`): `Vector2Builder`

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`Vector2Builder`

## Properties

### x

> **x**: `number`

#### Remarks

X component of the two-dimensional vector.

#### Implementation of

[`Vector2`](../../server/interfaces/Vector2.md).[`x`](../../server/interfaces/Vector2.md#x)

***

### y

> **y**: `number`

#### Remarks

Y component of the two-dimensional vector.

#### Implementation of

[`Vector2`](../../server/interfaces/Vector2.md).[`y`](../../server/interfaces/Vector2.md#y)

## Methods

### add()

> **add**(`v`): `this`

add

Adds the vector v to this, returning itself.

#### Parameters

##### v

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

`this`

***

### assign()

> **assign**(`vec`): `this`

Assigns the values of the passed in vector to this vector. Returns itself.

#### Parameters

##### vec

[`Vector2`](../../server/interfaces/Vector2.md)

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

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

###### min?

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

`this`

***

### distance()

> **distance**(`vec`): `number`

distance

Calculate the distance between two vectors

#### Parameters

##### vec

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`number`

***

### dot()

> **dot**(`vec`): `number`

dot

Computes the dot product of this and the passed in vector.

#### Parameters

##### vec

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`number`

***

### equals()

> **equals**(`v`): `boolean`

equals

Check the equality of two vectors

#### Parameters

##### v

[`Vector2`](../../server/interfaces/Vector2.md)

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

[`Vector2`](../../server/interfaces/Vector2.md)

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

### multiply()

> **multiply**(`vec`): `this`

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [Vector2Builder.dot](#dot) product

#### Parameters

##### vec

[`Vector2`](../../server/interfaces/Vector2.md)

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

[`Vector2`](../../server/interfaces/Vector2.md)

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

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

`this`

***

### toString()

> **toString**(`options?`): `string`

Returns a string representation of an object.

#### Parameters

##### options?

###### decimals?

`number`

###### delimiter?

`string`

#### Returns

`string`

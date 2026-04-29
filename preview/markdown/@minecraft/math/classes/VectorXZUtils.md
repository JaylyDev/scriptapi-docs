[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/math](../README.md) / VectorXZUtils

# Class: VectorXZUtils

Utilities operating on VectorXZ objects. All methods are static and do not modify the input objects.

## Constructors

### Constructor

> **new VectorXZUtils**(): `VectorXZUtils`

#### Returns

`VectorXZUtils`

## Methods

### add()

> `static` **add**(`v1`, `v2`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

add

Add two vectors to produce a new vector

#### Parameters

##### v1

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### v2

`Partial`\<[`VectorXZ`](../../server/interfaces/VectorXZ.md)\>

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### clamp()

> `static` **clamp**(`v`, `limits?`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

##### v

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### limits?

###### max?

`Partial`\<[`VectorXZ`](../../server/interfaces/VectorXZ.md)\>

###### min?

`Partial`\<[`VectorXZ`](../../server/interfaces/VectorXZ.md)\>

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### distance()

> `static` **distance**(`a`, `b`): `number`

distance

Calculate the distance between two vectors

#### Parameters

##### a

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### b

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

`number`

***

### dot()

> `static` **dot**(`a`, `b`): `number`

dot

Calculate the dot product of two vectors

#### Parameters

##### a

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### b

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

`number`

***

### equals()

> `static` **equals**(`v1`, `v2`): `boolean`

equals

Check the equality of two vectors

#### Parameters

##### v1

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### v2

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

`boolean`

***

### floor()

> `static` **floor**(`v`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

floor

Floor the components of a vector to produce a new vector

#### Parameters

##### v

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### fromString()

> `static` **fromString**(`str`, `delimiter?`): [`VectorXZ`](../../server/interfaces/VectorXZ.md) \| `undefined`

fromString

Gets a VectorXZ from the string representation produced by [VectorXZUtils.toString](#tostring). If any numeric value is not a number
or the format is invalid, undefined is returned.

#### Parameters

##### str

`string`

The string to parse

##### delimiter?

`string`

The delimiter used to separate the components. Defaults to the same as the default for [VectorXZUtils.toString](#tostring)

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md) \| `undefined`

***

### lerp()

> `static` **lerp**(`a`, `b`, `t`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

##### a

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### b

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### t

`number`

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### magnitude()

> `static` **magnitude**(`v`): `number`

magnitude

The magnitude of a vector

#### Parameters

##### v

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

`number`

***

### multiply()

> `static` **multiply**(`a`, `b`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [VectorXZUtils.dot](#dot) product

#### Parameters

##### a

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### b

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### normalize()

> `static` **normalize**(`v`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

normalize

Takes a vector 3 and normalizes it to a unit vector

#### Parameters

##### v

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### scale()

> `static` **scale**(`v1`, `scale`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

scale

Multiple all entries in a vector by a single scalar value producing a new vector

#### Parameters

##### v1

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### scale

`number`

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### slerp()

> `static` **slerp**(`a`, `b`, `t`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

##### a

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### b

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### t

`number`

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### subtract()

> `static` **subtract**(`v1`, `v2`): [`VectorXZ`](../../server/interfaces/VectorXZ.md)

subtract

Subtract two vectors to produce a new vector (v1-v2)

#### Parameters

##### v1

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### v2

`Partial`\<[`VectorXZ`](../../server/interfaces/VectorXZ.md)\>

#### Returns

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

***

### toString()

> `static` **toString**(`v`, `options?`): `string`

toString

Create a string representation of a vectorxz

#### Parameters

##### v

[`VectorXZ`](../../server/interfaces/VectorXZ.md)

##### options?

###### decimals?

`number`

###### delimiter?

`string`

#### Returns

`string`

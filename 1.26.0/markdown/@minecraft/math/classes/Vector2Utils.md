[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/math](../README.md) / Vector2Utils

# Class: Vector2Utils

Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.

## Constructors

### Constructor

> **new Vector2Utils**(): `Vector2Utils`

#### Returns

`Vector2Utils`

## Methods

### add()

> `static` **add**(`v1`, `v2`): [`Vector2`](../../server/interfaces/Vector2.md)

add

Add two vectors to produce a new vector

#### Parameters

##### v1

[`Vector2`](../../server/interfaces/Vector2.md)

##### v2

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### clamp()

> `static` **clamp**(`v`, `limits?`): [`Vector2`](../../server/interfaces/Vector2.md)

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

##### v

[`Vector2`](../../server/interfaces/Vector2.md)

##### limits?

###### max?

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

###### min?

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### distance()

> `static` **distance**(`a`, `b`): `number`

distance

Calculate the distance between two vectors

#### Parameters

##### a

[`Vector2`](../../server/interfaces/Vector2.md)

##### b

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`number`

***

### dot()

> `static` **dot**(`a`, `b`): `number`

dot

Calculate the dot product of two vectors

#### Parameters

##### a

[`Vector2`](../../server/interfaces/Vector2.md)

##### b

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`number`

***

### equals()

> `static` **equals**(`v1`, `v2`): `boolean`

equals

Check the equality of two vectors

#### Parameters

##### v1

[`Vector2`](../../server/interfaces/Vector2.md)

##### v2

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`boolean`

***

### floor()

> `static` **floor**(`v`): [`Vector2`](../../server/interfaces/Vector2.md)

floor

Floor the components of a vector to produce a new vector

#### Parameters

##### v

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### fromString()

> `static` **fromString**(`str`, `delimiter?`): [`Vector2`](../../server/interfaces/Vector2.md) \| `undefined`

fromString

Gets a Vector2 from the string representation produced by [Vector2Utils.toString](#tostring). If any numeric value is not a number
or the format is invalid, undefined is returned.

#### Parameters

##### str

`string`

The string to parse

##### delimiter?

`string`

The delimiter used to separate the components. Defaults to the same as the default for [Vector2Utils.toString](#tostring)

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md) \| `undefined`

***

### lerp()

> `static` **lerp**(`a`, `b`, `t`): [`Vector2`](../../server/interfaces/Vector2.md)

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

##### a

[`Vector2`](../../server/interfaces/Vector2.md)

##### b

[`Vector2`](../../server/interfaces/Vector2.md)

##### t

`number`

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### magnitude()

> `static` **magnitude**(`v`): `number`

magnitude

The magnitude of a vector

#### Parameters

##### v

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

`number`

***

### multiply()

> `static` **multiply**(`a`, `b`): [`Vector2`](../../server/interfaces/Vector2.md)

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [Vector2Utils.dot](#dot) product

#### Parameters

##### a

[`Vector2`](../../server/interfaces/Vector2.md)

##### b

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### normalize()

> `static` **normalize**(`v`): [`Vector2`](../../server/interfaces/Vector2.md)

normalize

Takes a vector 3 and normalizes it to a unit vector

#### Parameters

##### v

[`Vector2`](../../server/interfaces/Vector2.md)

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### scale()

> `static` **scale**(`v1`, `scale`): [`Vector2`](../../server/interfaces/Vector2.md)

scale

Multiple all entries in a vector by a single scalar value producing a new vector

#### Parameters

##### v1

[`Vector2`](../../server/interfaces/Vector2.md)

##### scale

`number`

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### slerp()

> `static` **slerp**(`a`, `b`, `t`): [`Vector2`](../../server/interfaces/Vector2.md)

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

##### a

[`Vector2`](../../server/interfaces/Vector2.md)

##### b

[`Vector2`](../../server/interfaces/Vector2.md)

##### t

`number`

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### subtract()

> `static` **subtract**(`v1`, `v2`): [`Vector2`](../../server/interfaces/Vector2.md)

subtract

Subtract two vectors to produce a new vector (v1-v2)

#### Parameters

##### v1

[`Vector2`](../../server/interfaces/Vector2.md)

##### v2

`Partial`\<[`Vector2`](../../server/interfaces/Vector2.md)\>

#### Returns

[`Vector2`](../../server/interfaces/Vector2.md)

***

### toString()

> `static` **toString**(`v`, `options?`): `string`

toString

Create a string representation of a vector2

#### Parameters

##### v

[`Vector2`](../../server/interfaces/Vector2.md)

##### options?

###### decimals?

`number`

###### delimiter?

`string`

#### Returns

`string`

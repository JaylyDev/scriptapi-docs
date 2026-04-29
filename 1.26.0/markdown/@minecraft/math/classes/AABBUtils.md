[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/math](../README.md) / AABBUtils

# Class: AABBUtils

Utilities operating on AABB objects. All methods are static and do not modify the input objects.

## Properties

### EPSILON

> `static` **EPSILON**: `number`

EPSILON

The internal epsilon value that determines validity and used for block volume tolerance.

## Methods

### createFromCornerPoints()

> `static` **createFromCornerPoints**(`pointA`, `pointB`): [`AABB`](../../server/interfaces/AABB.md)

createFromCornerPoints

Gets an AABB from points defining it's corners, the order doesn't matter.

#### Parameters

##### pointA

[`Vector3`](../../server/interfaces/Vector3.md)

The first corner point.

##### pointB

[`Vector3`](../../server/interfaces/Vector3.md)

The second corner point.

#### Returns

[`AABB`](../../server/interfaces/AABB.md)

- The resulting AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the resulting AABB is invalid.
    *
    *

***

### dilate()

> `static` **dilate**(`aabb`, `size`): [`AABB`](../../server/interfaces/AABB.md)

dilate

Creates a dilated AABB given a source AABB and dilation vector.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The source AABB.

##### size

[`Vector3`](../../server/interfaces/Vector3.md)

The dilation vector to add to the AABBs extent.

#### Returns

[`AABB`](../../server/interfaces/AABB.md)

- The resulting dilated AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

***

### equals()

> `static` **equals**(`aabb`, `other`): `boolean`

equals

Compares the equality of two AABBs.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The first AABB in the comparison.

##### other

[`AABB`](../../server/interfaces/AABB.md)

The second AABB in the comparison.

#### Returns

`boolean`

- True if the center and extent of both AABBs are equal.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *

***

### expand()

> `static` **expand**(`aabb`, `other`): [`AABB`](../../server/interfaces/AABB.md)

expand

Creates an expanded AABB given two source AABBs.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The first source AABB.

##### other

[`AABB`](../../server/interfaces/AABB.md)

The second source AABB.

#### Returns

[`AABB`](../../server/interfaces/AABB.md)

- The resulting expanded AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *

***

### getBlockVolume()

> `static` **getBlockVolume**(`aabb`): [`BlockVolume`](../../server/classes/BlockVolume.md)

getBlockVolume

Creates the smallest BlockVolume that includes all of a source AABB.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The source AABB.

#### Returns

[`BlockVolume`](../../server/classes/BlockVolume.md)

- The BlockVolume containing the source AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

***

### getIntersection()

> `static` **getIntersection**(`aabb`, `other`): [`AABB`](../../server/interfaces/AABB.md) \| `undefined`

getIntersection

Creates an AABB of the intersecting area of two source AABBs.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The first source AABB.

##### other

[`AABB`](../../server/interfaces/AABB.md)

The second source AABB.

#### Returns

[`AABB`](../../server/interfaces/AABB.md) \| `undefined`

- The resulting intersecting AABB if they intersect, otherwise returns undefined.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *

***

### getMax()

> `static` **getMax**(`aabb`): [`Vector3`](../../server/interfaces/Vector3.md)

getMax

Gets the maximum corner of an AABB.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The AABB to retrieve the maximum corner of.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

- The maximum corner of the AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

***

### getMin()

> `static` **getMin**(`aabb`): [`Vector3`](../../server/interfaces/Vector3.md)

getMin

Gets the minimum corner of an AABB.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The AABB to retrieve the minimum corner of.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

- The minimum corner of the AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

***

### getSpan()

> `static` **getSpan**(`aabb`): [`Vector3`](../../server/interfaces/Vector3.md)

getSpan

Gets the span of an AABB.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The AABB to retrieve the span of.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

- The span of the AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

***

### intersects()

> `static` **intersects**(`aabb`, `other`): `boolean`

intersects

Calculates if two AABBs are intersecting.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The first AABB.

##### other

[`AABB`](../../server/interfaces/AABB.md)

The second AABB.

#### Returns

`boolean`

- True if the AABBs are intersecting, otherwise false.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if either of the input AABBs are invalid.
    *
    *

***

### isInside()

> `static` **isInside**(`aabb`, `pos`): `boolean`

isInside

Calculates if a position is inside of an AABB.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The AABB to test against.

##### pos

[`Vector3`](../../server/interfaces/Vector3.md)

The position to test.

#### Returns

`boolean`

True if the position is inside of the AABB, otherwise returns false.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

***

### isValid()

> `static` **isValid**(`aabb`): `boolean`

isValid

Determines if the AABB has non-zero extent on all axes.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The AABB to test for validity.

#### Returns

`boolean`

- True if all extent axes are non-zero, otherwise false.

***

### throwErrorIfInvalid()

> `static` **throwErrorIfInvalid**(`aabb`): `void`

throwErrorIfInvalid

Throws an error if the AABB is invalid.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The AABB to test for validity.

#### Returns

`void`

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.

***

### translate()

> `static` **translate**(`aabb`, `delta`): [`AABB`](../../server/interfaces/AABB.md)

translate

Creates a translated AABB given a source AABB and translation vector.

#### Parameters

##### aabb

[`AABB`](../../server/interfaces/AABB.md)

The source AABB.

##### delta

[`Vector3`](../../server/interfaces/Vector3.md)

The translation vector to add to the AABBs center.

#### Returns

[`AABB`](../../server/interfaces/AABB.md)

- The resulting translated AABB.

#### Throws

[AABBInvalidExtentError](AABBInvalidExtentError.md)
    * This exception is thrown if the input AABB is invalid.
    *
    *

[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockVolumeBase

# Class: BlockVolumeBase

Base type for BlockVolumes.

## Extended by

- [`BlockVolume`](BlockVolume-1.md)
- [`ListBlockVolume`](ListBlockVolume-1.md)

## Constructors

### Constructor

> `private` **new BlockVolumeBase**(): `BlockVolumeBase`

#### Returns

`BlockVolumeBase`

## Methods

### getBlockLocationIterator()

> **getBlockLocationIterator**(): [`BlockLocationIterator`](BlockLocationIterator-1.md)

#### Returns

[`BlockLocationIterator`](BlockLocationIterator-1.md)

#### Remarks

Fetch a [BlockLocationIterator](BlockLocationIterator-1.md) that represents all of
the block world locations within the specified volume

#### World Ready

This function can't be called in early-execution mode.

***

### getBoundingBox()

> **getBoundingBox**(): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

**`Beta`**

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Remarks

Return a [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) object which represents
the validated min and max coordinates of the volume

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getCapacity()

> **getCapacity**(): `number`

#### Returns

`number`

#### Remarks

Return the capacity (volume) of the BlockVolume (W*D*H)

#### World Ready

This function can't be called in early-execution mode.

***

### getMax()

> **getMax**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Get the largest corner position of the volume (guaranteed to
be >= min)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getMin()

> **getMin**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Get the smallest corner position of the volume (guaranteed
to be <= max)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getSpan()

> **getSpan**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Get a [Vector3](../interfaces/Vector3-1.md) object where each component represents
the number of blocks along that axis

#### World Ready

This function can't be called in early-execution mode.

***

### isInside()

> **isInside**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

`boolean`

#### Remarks

Check to see if a given world block location is inside a
BlockVolume

#### World Ready

This function can't be called in early-execution mode.

***

### translate()

> **translate**(`delta`): `void`

#### Parameters

##### delta

[`Vector3`](../interfaces/Vector3-1.md)

Amount of blocks to move by

#### Returns

`void`

#### Remarks

Move a BlockVolume by a specified amount

#### World Ready

This function can't be called in early-execution mode.

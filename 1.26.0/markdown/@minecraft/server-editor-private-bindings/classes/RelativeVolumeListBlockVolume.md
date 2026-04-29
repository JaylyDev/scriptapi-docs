[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / RelativeVolumeListBlockVolume

# Class: RelativeVolumeListBlockVolume

Base type for BlockVolumes.

## Extends

- [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md)

## Constructors

### Constructor

> **new RelativeVolumeListBlockVolume**(`origin?`): `RelativeVolumeListBlockVolume`

#### Parameters

##### origin?

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`RelativeVolumeListBlockVolume`

#### Overrides

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`constructor`](../../server/classes/BlockVolumeBase.md#constructor)

## Properties

### isEmpty

> `readonly` **isEmpty**: `boolean`

***

### origin?

> `optional` **origin?**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### volumeCount

> `readonly` **volumeCount**: `number`

## Methods

### add()

> **add**(`toAdd`): `void`

#### Parameters

##### toAdd

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| `RelativeVolumeListBlockVolume`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockLocationIterator()

> **getBlockLocationIterator**(): [`BlockLocationIterator`](../../server/classes/BlockLocationIterator.md)

#### Returns

[`BlockLocationIterator`](../../server/classes/BlockLocationIterator.md)

#### Remarks

Fetch a [BlockLocationIterator](../../server/classes/BlockLocationIterator.md) that represents all of
the block world locations within the specified volume

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`getBlockLocationIterator`](../../server/classes/BlockVolumeBase.md#getblocklocationiterator)

***

### getBoundingBox()

> **getBoundingBox**(): [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

**`Beta`**

#### Returns

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Remarks

Return a [BlockBoundingBox](../../server/interfaces/BlockBoundingBox.md) object which represents
the validated min and max coordinates of the volume

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

`minecraftserver.BlockVolumeBase.getBoundingBox`

***

### getCapacity()

> **getCapacity**(): `number`

#### Returns

`number`

#### Remarks

Return the capacity (volume) of the BlockVolume (W*D*H)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`getCapacity`](../../server/classes/BlockVolumeBase.md#getcapacity)

***

### getMax()

> **getMax**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

Get the largest corner position of the volume (guaranteed to
be >= min)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`getMax`](../../server/classes/BlockVolumeBase.md#getmax)

***

### getMin()

> **getMin**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

Get the smallest corner position of the volume (guaranteed
to be <= max)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`getMin`](../../server/classes/BlockVolumeBase.md#getmin)

***

### getSpan()

> **getSpan**(): [`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

Get a [Vector3](../../server/interfaces/Vector3.md) object where each component represents
the number of blocks along that axis

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`getSpan`](../../server/classes/BlockVolumeBase.md#getspan)

***

### getVolumeList()

> **getVolumeList**(): [`BlockVolume`](../../server/classes/BlockVolume.md)[]

#### Returns

[`BlockVolume`](../../server/classes/BlockVolume.md)[]

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### hasAdjacent()

> **hasAdjacent**(`location`, `normalizedOffset`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### normalizedOffset

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

***

### isInside()

> **isInside**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

Check to see if a given world block location is inside a
BlockVolume

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`isInside`](../../server/classes/BlockVolumeBase.md#isinside)

***

### moveTo()

> **moveTo**(`location`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### remove()

> **remove**(`toRemove`): `void`

#### Parameters

##### toRemove

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| `RelativeVolumeListBlockVolume`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### set()

> **set**(`toSet`): `void`

#### Parameters

##### toSet

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| `RelativeVolumeListBlockVolume`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### translate()

> **translate**(`offset`): `void`

#### Parameters

##### offset

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Overrides

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md).[`translate`](../../server/classes/BlockVolumeBase.md#translate)

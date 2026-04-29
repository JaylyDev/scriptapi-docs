[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockVolume

# Class: BlockVolume

A BlockVolume is a simple interface to an object which
represents a 3D rectangle of a given size (in blocks) at a
world block location.
Note that these are not analogous to "min" and "max" values,
in that the vector components are not guaranteed to be in
any order.
In addition, these vector positions are not interchangeable
with BlockLocation.
If you want to get this volume represented as range of of
BlockLocations, you can use the getBoundingBox utility
function.
This volume class will maintain the ordering of the corner
indexes as initially set. imagine that each corner is
assigned in Editor - as you move the corner around
(potentially inverting the min/max relationship of the
bounds) - what
you had originally selected as the top/left corner would
traditionally become the bottom/right.
When manually editing these kinds of volumes, you need to
maintain the identity of the corner as you edit - the
BlockVolume utility functions do this.

Important to note that this measures block sizes (to/from) -
a normal AABB (0,0,0) to (0,0,0) would traditionally be of
size (0,0,0)
However, because we're measuring blocks - the size or span
of a BlockVolume would actually be (1,1,1)

## Example

```ts
import { BlockVolume, Vector3 } from "@minecraft/server";

// Create a block volume representing a cubic region
const startLocation: Vector3 = { x: 0, y: 64, z: 0 };
const endLocation: Vector3 = { x: 10, y: 74, z: 10 };

// Create a new block volume using the constructor
const blockVolume = new BlockVolume(startLocation, endLocation);

// Example usage of the block volume
console.log(
   `Volume spans from (${blockVolume.from.x}, ${blockVolume.from.y}, ${blockVolume.from.z}) to (${blockVolume.to.x}, ${blockVolume.to.y}, ${blockVolume.to.z})`
);

// Use BlockVolume methods
const capacity = blockVolume.getCapacity();
console.log(`Volume capacity: ${capacity} blocks`);

// Check if a location touches faces of the volume
const testLocation: Vector3 = { x: 5, y: 68, z: 5 };
const touchesFaces = blockVolume.doesLocationTouchFaces(testLocation);
console.log(`Location (5, 68, 5) ${touchesFaces ? "touches" : "does not touch"} the volume faces`);

// Create another volume to test intersection
const otherVolume = new BlockVolume({ x: 5, y: 60, z: 5 }, { x: 15, y: 70, z: 15 });
const volumesIntersect = blockVolume.intersects(otherVolume);
console.log(`Volumes ${volumesIntersect ? "intersect" : "do not intersect"}`);

// Get an iterator for all block locations in the volume
const iterator = blockVolume.getBlockLocationIterator();
let blockCount = 0;
for (const location of iterator) {
   blockCount++;
   if (blockCount <= 5) {
       console.log(`Block ${blockCount}: (${location.x}, ${location.y}, ${location.z})`);
   }
}
```

## Source

```ts
export class BlockVolume extends BlockVolumeBase {
    'from': Vector3;
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    doesLocationTouchFaces(pos: Vector3): boolean;
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    intersects(other: BlockVolume): BlockVolumeIntersection;
}
```

## Extends

- [`BlockVolumeBase`](BlockVolumeBase-1.md)

## Constructors

### Constructor

> **new BlockVolume**(`from`, `to`): `BlockVolume`

#### Parameters

##### from

[`Vector3`](../interfaces/Vector3-1.md)

##### to

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

`BlockVolume`

#### Overrides

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`constructor`](BlockVolumeBase-1.md#constructor)

## Properties

### from

> **from**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

A world block location that represents a corner in a 3D
rectangle

#### World Ready

This property can't be read in early-execution mode.

***

### to

> **to**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

A world block location that represents the opposite corner
in a 3D rectangle

#### World Ready

This property can't be read in early-execution mode.

## Methods

### doesLocationTouchFaces()

> **doesLocationTouchFaces**(`pos`): `boolean`

#### Parameters

##### pos

[`Vector3`](../interfaces/Vector3-1.md)

The world block location to test

#### Returns

`boolean`

If the location is either inside or more than 0 blocks away,
the function will return false.
If the location is directly contacting the outer surface of
the BlockVolume, the function will return true.

#### Remarks

Check to see if the given location is directly adjacent to
the outer surface of a BlockVolume.

#### World Ready

This function can't be called in early-execution mode.

***

### doesVolumeTouchFaces()

> **doesVolumeTouchFaces**(`other`): `boolean`

#### Parameters

##### other

`BlockVolume`

The volume to test

#### Returns

`boolean`

If the outer faces of both block volumes touch and are
directly adjacent at any point, return true.

#### Remarks

Check to see if a two block volumes are directly adjacent
and two faces touch.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockLocationIterator()

> **getBlockLocationIterator**(): [`BlockLocationIterator`](BlockLocationIterator-1.md)

#### Returns

[`BlockLocationIterator`](BlockLocationIterator-1.md)

#### Remarks

Fetch a [BlockLocationIterator](BlockLocationIterator-1.md) that represents all of
the block world locations within the specified volume

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`getBlockLocationIterator`](BlockVolumeBase-1.md#getblocklocationiterator)

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

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`getBoundingBox`](BlockVolumeBase-1.md#getboundingbox)

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

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`getCapacity`](BlockVolumeBase-1.md#getcapacity)

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

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`getMax`](BlockVolumeBase-1.md#getmax)

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

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`getMin`](BlockVolumeBase-1.md#getmin)

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

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`getSpan`](BlockVolumeBase-1.md#getspan)

***

### intersects()

> **intersects**(`other`): [`BlockVolumeIntersection`](../enumerations/BlockVolumeIntersection-1.md)

#### Parameters

##### other

`BlockVolume`

#### Returns

[`BlockVolumeIntersection`](../enumerations/BlockVolumeIntersection-1.md)

#### Remarks

Return an enumeration which represents the intersection
between two BlockVolume objects

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

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`isInside`](BlockVolumeBase-1.md#isinside)

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

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase-1.md).[`translate`](BlockVolumeBase-1.md#translate)

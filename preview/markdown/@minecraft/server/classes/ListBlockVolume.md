[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ListBlockVolume

# Class: ListBlockVolume

Volume composed of an unordered container of unique block
locations.

## Example

```ts
import { ListBlockVolume, Vector3 } from "@minecraft/server";

// Create a list block volume with specific block locations
const locations: Vector3[] = [
   { x: 0, y: 64, z: 0 },
   { x: 1, y: 64, z: 0 },
   { x: 2, y: 64, z: 0 },
   { x: 0, y: 65, z: 0 },
   { x: 5, y: 70, z: 10 },
];

// Create a ListBlockVolume from an array of locations
const listVolume = new ListBlockVolume(locations);

// Get the bounding box that encompasses all locations
const boundingBox = listVolume.getBoundingBox();
console.log(
   `Bounding box from (${boundingBox.min.x}, ${boundingBox.min.y}, ${boundingBox.min.z}) to (${boundingBox.max.x}, ${boundingBox.max.y}, ${boundingBox.max.z})`
);

// Iterate through all block locations in the volume
const iterator = listVolume.getBlockLocationIterator();
let count = 0;
for (const location of iterator) {
   count++;
   console.log(`Block ${count}: (${location.x}, ${location.y}, ${location.z})`);
}

console.log(`List volume contains ${count} blocks`);

// Example: Create a list volume for a specific pattern (like a plus sign)
const plusPattern: Vector3[] = [
   { x: 0, y: 64, z: 0 }, // center
   { x: 1, y: 64, z: 0 }, // east
   { x: -1, y: 64, z: 0 }, // west
   { x: 0, y: 64, z: 1 }, // north
   { x: 0, y: 64, z: -1 }, // south
];

const plusVolume = new ListBlockVolume(plusPattern);

// Count blocks in plus pattern
let plusCount = 0;
for (const location of plusVolume.getBlockLocationIterator()) {
   plusCount++;
}
console.log(`Plus pattern volume contains ${plusCount} blocks`);
```

## Source

```ts
export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    add(locations: Vector3[]): void;
    remove(locations: Vector3[]): void;
}
```

## Extends

- [`BlockVolumeBase`](BlockVolumeBase.md)

## Constructors

### Constructor

> **new ListBlockVolume**(`locations`): `ListBlockVolume`

#### Parameters

##### locations

[`Vector3`](../interfaces/Vector3.md)[]

Initial array of block locations that ListBlockVolume will
be constructed with.

#### Returns

`ListBlockVolume`

#### Remarks

Creates a new instance of ListBlockVolume.

#### Overrides

[`BlockVolumeBase`](BlockVolumeBase.md).[`constructor`](BlockVolumeBase.md#constructor)

## Methods

### add()

> **add**(`locations`): `void`

#### Parameters

##### locations

[`Vector3`](../interfaces/Vector3.md)[]

Array of block locations to be inserted into container.

#### Returns

`void`

#### Remarks

Insert block locations into container.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockLocationIterator()

> **getBlockLocationIterator**(): [`BlockLocationIterator`](BlockLocationIterator.md)

#### Returns

[`BlockLocationIterator`](BlockLocationIterator.md)

#### Remarks

Fetch a [BlockLocationIterator](BlockLocationIterator.md) that represents all of
the block world locations within the specified volume

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase.md).[`getBlockLocationIterator`](BlockVolumeBase.md#getblocklocationiterator)

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

[`BlockVolumeBase`](BlockVolumeBase.md).[`getCapacity`](BlockVolumeBase.md#getcapacity)

***

### getMax()

> **getMax**(): [`Vector3`](../interfaces/Vector3.md)

#### Returns

[`Vector3`](../interfaces/Vector3.md)

#### Remarks

Get the largest corner position of the volume (guaranteed to
be >= min)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase.md).[`getMax`](BlockVolumeBase.md#getmax)

***

### getMin()

> **getMin**(): [`Vector3`](../interfaces/Vector3.md)

#### Returns

[`Vector3`](../interfaces/Vector3.md)

#### Remarks

Get the smallest corner position of the volume (guaranteed
to be <= max)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase.md).[`getMin`](BlockVolumeBase.md#getmin)

***

### getSpan()

> **getSpan**(): [`Vector3`](../interfaces/Vector3.md)

#### Returns

[`Vector3`](../interfaces/Vector3.md)

#### Remarks

Get a [Vector3](../interfaces/Vector3.md) object where each component represents
the number of blocks along that axis

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase.md).[`getSpan`](BlockVolumeBase.md#getspan)

***

### isInside()

> **isInside**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3.md)

#### Returns

`boolean`

#### Remarks

Check to see if a given world block location is inside a
BlockVolume

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase.md).[`isInside`](BlockVolumeBase.md#isinside)

***

### remove()

> **remove**(`locations`): `void`

#### Parameters

##### locations

[`Vector3`](../interfaces/Vector3.md)[]

Array of block locations to be removed from container.

#### Returns

`void`

#### Remarks

Remove block locations from container.

#### World Ready

This function can't be called in early-execution mode.

***

### translate()

> **translate**(`delta`): `void`

#### Parameters

##### delta

[`Vector3`](../interfaces/Vector3.md)

Amount of blocks to move by

#### Returns

`void`

#### Remarks

Move a BlockVolume by a specified amount

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`BlockVolumeBase`](BlockVolumeBase.md).[`translate`](BlockVolumeBase.md#translate)

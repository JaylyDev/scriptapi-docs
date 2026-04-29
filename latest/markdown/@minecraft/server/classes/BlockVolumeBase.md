[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockVolumeBase

# Class: BlockVolumeBase

Base type for BlockVolumes.

## Source

```ts
export class BlockVolumeBase {
    private constructor();
    getBlockLocationIterator(): BlockLocationIterator;
    getCapacity(): number;
    getMax(): Vector3;
    getMin(): Vector3;
    getSpan(): Vector3;
    isInside(location: Vector3): boolean;
    translate(delta: Vector3): void;
}
```

## Extended by

- [`BlockVolume`](BlockVolume.md)
- [`ListBlockVolume`](ListBlockVolume.md)
- [`RelativeVolumeListBlockVolume`](../../server-editor/classes/RelativeVolumeListBlockVolume.md)

## Constructors

### Constructor

> `private` **new BlockVolumeBase**(): `BlockVolumeBase`

#### Returns

`BlockVolumeBase`

## Methods

### getBlockLocationIterator()

> **getBlockLocationIterator**(): [`BlockLocationIterator`](BlockLocationIterator.md)

#### Returns

[`BlockLocationIterator`](BlockLocationIterator.md)

#### Remarks

Fetch a [BlockLocationIterator](BlockLocationIterator.md) that represents all of
the block world locations within the specified volume

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

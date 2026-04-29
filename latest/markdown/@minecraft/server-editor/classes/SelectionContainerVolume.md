[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / SelectionContainerVolume

# Class: SelectionContainerVolume

## Extends

- [`SelectionContainerBase`](SelectionContainerBase.md)

## Constructors

### Constructor

> `private` **new SelectionContainerVolume**(): `SelectionContainerVolume`

#### Returns

`SelectionContainerVolume`

#### Overrides

[`SelectionContainerBase`](SelectionContainerBase.md).[`constructor`](SelectionContainerBase.md#constructor)

## Properties

### isEmpty

> `readonly` **isEmpty**: `boolean`

***

### volumeCount

> `readonly` **volumeCount**: `number`

## Methods

### add()

> **add**(`volume`): `void`

#### Parameters

##### volume

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

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

### get()

> **get**(): [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

[`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

***

### getBoundingBox()

> **getBoundingBox**(): [`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Returns

[`BlockBoundingBox`](../../server/interfaces/BlockBoundingBox.md)

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

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

> **remove**(`volume`): `void`

#### Parameters

##### volume

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### set()

> **set**(`volume`): `void`

#### Parameters

##### volume

[`Vector3`](../../server/interfaces/Vector3.md) \| [`Vector3`](../../server/interfaces/Vector3.md)[] \| [`BlockVolume`](../../server/classes/BlockVolume.md) \| [`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md) \| [`RelativeVolumeListBlockVolume`](RelativeVolumeListBlockVolume.md)

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
